const db = require('../db')
const crypto = require('crypto')
const salt = 'soynote'
const UUIDGen = require('./UUIDGen')
module.exports.salt = salt

module.exports.findById = (id) => {
  return new Promise((resolve, reject) => {
    db.User.findOne({
      where: { id }
    }).then((user) => {
      if (user && user.dataValues) {
        resolve(user.dataValues)
      } else {
        resolve(null)
      }
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.findByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.User.findOne({
      where: { email }
    }).then((user) => {
      if (user && user.dataValues) {
        resolve(user.dataValues)
      } else {
        resolve(null)
      }
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.findByNick = (nickname) => {
  return new Promise((resolve, reject) => {
    db.User.findOne({
      where: { nickname }
    }).then((user) => {
      if (user && user.dataValues) {
        resolve(user.dataValues)
      } else {
        resolve(null)
      }
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.register = ({email, password, nickname}) => {
  const createPassword = require('./User').password
  return new Promise((resolve, reject) => {
    UUIDGen((result) => {
      const findById = require('./User').findById
      return new Promise((resolve, reject) => {
        findById(result).then((result) => {
          if (!result) {
            resolve(true)
          } else {
            resolve(false)
          }
        }).catch((error) => {
          reject(error)
        })
      })
    }).then((uuid) => {
      db.User.create({
        uuid,
        email,
        password: createPassword(password, salt),
        nickname
      }).then(() => {
        resolve(true)
      }).catch((error) => {
        reject(error)
      })
    }).error((error) => {
      reject(error)
    })
  })
}

module.exports.password = (password, salt) => {
  const firstPassword = crypto.createHash('sha256').update(password).digest('base64')
  const passwordWithSalt = crypto.createHash('sha256').update(firstPassword + salt).digest('base64')
  return passwordWithSalt
}
