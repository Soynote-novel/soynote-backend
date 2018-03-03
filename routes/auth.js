const router = require('express').Router
const model = require('../model')
const salt = 'waffle'

router.post('/login', async (req, res) => {
  const user = await model.User.findByEmail(req.email)

  if (user.isBlocked) {
    let payload = {
      error: 'this is blocked account'
    }

    res.status(403)
    res.jsonp(payload)
    res.end()
  } else {
    const password = model.User.password(res.password, salt)

    if (user.password === password) {
      req.session = {
        nickname: user.nickname,
        email: user.email,
        isAdmin: user.isAdmin,
        id: user.id
      }

      let payload = {
        success: true
      }

      res.status(200)
      res.jsonp(payload)
      res.end()
    }
  }
})

module.exports = router
