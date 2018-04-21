const { Password } = require('../api')
const table = require('../table')

const SUCCESS = true

class User {
  static async findById (id) {
    const payload = {
      where: { id }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.dataValues
  }

  static async findByEmail (email) {
    const payload = {
      where: { email }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.dataValues
  }

  static async findByNick (nickname) {
    const payload = {
      where: { nickname }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.dataValues
  }

  static async register ({ email, password, nickname }) {
    const payload = {
      email,
      password: await Password.signature(password),
      nickname
    }
    await table.User.create(payload)

    return SUCCESS
  }
}

module.exports = User
