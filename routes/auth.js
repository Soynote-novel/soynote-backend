const router = require('express').Router()

const model = require('../model')
const { Password } = require('../api')
const JWT = require('../api/jwt')

router.post('/login', async (req, res) => {
  const user = await model.User.findByEmail(req.email)

  if (user.isBlocked) {
    const payload = {
      error: 'this is blocked account',
      isBlocked: true
    }

    res.status(403)
    res.jsonp(payload)
    res.end()

    return
  }

  if (user.verified) {
    const payload = {
      error: 'this is not verified account',
      notVerified: true
    }

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
    const payload = {
      success: true
    }
    const jwtPayload = {
      id, email, nickname, isAdmin
    }

    const token = await JWT.createToken(jwtPayload) // create jwt token

    res.cookie('sessToken', token, {
      httpOnly: true
    })
    payload.JWT_Token = token

    res.status(200)
    res.jsonp(payload)
    res.end()
  }
})

module.exports = router
