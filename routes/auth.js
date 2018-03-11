const router = require('express').Router()
const model = require('../model')

router.post('/login', async (req, res) => {
  const user = await model.User.findByEmail(req.email)

  if (user.isBlocked) {
    let payload = {
      error: 'this is blocked account',
      isBlocked: true
    }

    res.status(403)
    res.jsonp(payload)
    res.end()
  } else if (user.verified) {
    let payload = {
      error: 'this is not verified account',
      notVerified: true
    }

    res.status(403)
    res.jsonp(payload)
    res.end()
  } else {
    if (await model.User.comparePassword(req.body.password, user.password)) {
      const { id, email, nickname, isAdmin } = user
      req.session = { id, email, nickname, isAdmin }

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
