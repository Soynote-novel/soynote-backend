import { Router } from 'express'

const router = Router()

import * as model from '../model'
import { Password, JWT, LoginCheck, isNotLogin, sessToken, returnForm } from '../api'

router.post('/login', isNotLogin, async (req, res) => {
  const user = await model.User.findByEmail(req.body.email)

  if (!user) {
    const payload = returnForm.isError('user not found')

    res.status(404)
    res.jsonp(payload)
    res.end()

    return
  }

  if (user.isBlocked) {
    const payload = returnForm.isError('this is blocked account')

    res.status(403)
    res.jsonp(payload)
    res.end()

    return
  }

  if (!user.verified) {
    const payload = returnForm.isError('this is not verified account')

    res.status(403)
    res.jsonp(payload)
    res.end()

    return
  }

  const {
    id,
    email,
    nickname,
    password: targetPassword,
    isAdmin
  } = user

  const originPassword = req.body.password
  const isValidPassword = await Password.isValid(originPassword, targetPassword)
  if (isValidPassword) {
    const jwtPayload = {
      id, email, nickname, isAdmin
    }

    const token = await JWT.createToken(jwtPayload) // create jwt token

    sessToken.setToken(res, token)
    const payload = returnForm.isSuccess({
      success: true,
      JWT_Token: token
    })

    res.status(200)
    res.jsonp(payload)
    res.end()

    await model.Logs.log({
      user: id,
      ip: req.ip.replace('::ffff:', ''),
      type: 'auth.login'
    })
  }
})

router.get('/check', LoginCheck, async (req, res) => {
  const { id, email, nickname, isAdmin } = req.token

  const payload = returnForm.isSuccess({ id, email, nickname, isAdmin })

  res.status(200)
  res.send(payload)
  res.end()

  await model.Logs.log({
    user: id,
    ip: req.ip.replace('::ffff:', ''),
    type: 'auth.check'
  })
})

router.get('/renew', LoginCheck, async (req, res) => {
  const { id } = req.token
  let payload

  let userInfo = await model.User.findById(id)

  if (userInfo) {
    let { id, email, nickname, isAdmin } = userInfo
    const jwtPayload = {
      id, email, nickname, isAdmin
    }

    const token = await JWT.createToken(jwtPayload) // create jwt token

    sessToken.setToken(res, token)
    payload = returnForm.isSuccess({
      success: true,
      JWT_Token: token
    })

    res.status(200)

    await model.Logs.log({
      user: id,
      ip: req.ip.replace('::ffff:', ''),
      type: 'auth.renew'
    })
  } else {
    payload = returnForm.isError('user not found')

    res.status(404)
  }

  res.jsonp(payload)
  res.end()
})

export default router
