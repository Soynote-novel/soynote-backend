const router = require('express').Router
const model = require('../model')

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
    const password = model.User.password(res.password, model.User.salt)

    if (user.password === password) {
      const { nickname, email, isAdmin, id } = user
      req.session = { nickname, email, isAdmin, id }

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
