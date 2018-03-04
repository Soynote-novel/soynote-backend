const db = require('../db')
const crypto = require('crypto')
const salt = 'soynote'
module.exports.salt = salt

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

module.exports.findByNick = (nickname) => {
  return new Promise((resolve, reject) => {
    db.User.findOne({
      where: { nickname: nickname }
    }).then((user) => {
      resolve(user.dataValues)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.register = ({email, password, nickname}) => {
  const createPassword = require('./User').password
  return new Promise((resolve, reject) => {
    db.User.create({
      email: email,
      password: createPassword(password, salt),
      nickname: nickname
    }).then(() => {
      resolve(true)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.password = (password, salt) => {
  const firstPassword = crypto.createHash('sha256').update(password).digest('base64')
  const passwordWithSalt = crypto.createHash('sha256').update(firstPassword + salt).digest('base64')
  return passwordWithSalt
}
