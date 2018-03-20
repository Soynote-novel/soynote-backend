const router = require('express').Router()

const model = require('../model')
const { Password } = require('../api')

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
    req.session = { id, email, nickname, isAdmin }

    const payload = {
      success: true
    }

    res.status(200)
    res.jsonp(payload)
    res.end()
  }
})

module.exports = router
