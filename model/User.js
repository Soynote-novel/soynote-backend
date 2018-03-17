const db = require('../db')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

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
  const createPassword = require('./User').createPassword
  let genPassword = await createPassword(password)
  await db.User.create({
    email,
    password: genPassword,
    nickname
  })
  return true
}

module.exports.createPassword = async (password) => {
  const sha256Password = crypto.createHash('sha256').update(password).digest('hex')
  const bcryptPassword = await bcrypt.hash(sha256Password, 12)
  return bcryptPassword
}

module.exports.comparePassword = async (plaintextPassword, hashedPassword) => {
  const sha256Password = crypto.createHash('sha256').update(plaintextPassword).digest('hex')
  const compare = await bcrypt.compare(sha256Password, hashedPassword)
  return compare
}
