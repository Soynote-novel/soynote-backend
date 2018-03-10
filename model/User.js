const db = require('../db')
const crypto = require('crypto')
const salt = 'soynote'
const UUIDGen = require('./UUIDGen')
module.exports.salt = salt

module.exports.findById = async (id) => {
  let user = db.User.findOne({
    where: { id }
  })
  return (!!user) && user.dataValues
}

module.exports.findByEmail = async (email) => {
  let user = await db.User.findOne({
    where: { email }
  })
  return (!!user) && user.dataValues
}

module.exports.findByNick = async (nickname) => {
  let user = await db.User.findOne({
    where: { nickname }
  })
  return (!!user) && user.dataValues
}

module.exports.register = async ({email, password, nickname}) => {
  const createPassword = require('./User').password
  let uuid = await UUIDGen(async (result) => {
    const findById = require('./User').findById
    let find = await findById(result)
    return !find
  })
  await db.User.create({
    uuid,
    email,
    password: createPassword(password, salt),
    nickname
  })
  return true
}

module.exports.password = (password, salt) => {
  const firstPassword = crypto.createHash('sha256').update(password).digest('base64')
  const passwordWithSalt = crypto.createHash('sha256').update(firstPassword + salt).digest('base64')
  return passwordWithSalt
}
