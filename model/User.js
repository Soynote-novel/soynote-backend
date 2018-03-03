const db = require('../db')
const crypto = require('crypto')

module.exports.findById = (id) => {
  return new Promise((resolve, reject) => {
    db.User.findOne({
      where: { id: id }
    }).then((user) => {
      resolve(user.dataValues)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.findByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.User.findOne({
      where: { email: email }
    }).then((user) => {
      resolve(user.dataValues)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.password = (password, salt) => {
  const firstPassword = crypto.createHash('sha256').update(password).digest('base64')
  const passwordWithSalt = crypto.createHash('sha256').update(firstPassword + salt).digest('base64')
}