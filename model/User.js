const { Password } = require('../api')
const table = require('../table')

const SUCCESS = true

module.exports = class User {
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
      wehre: { nickname }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.dataValues
  }

  static async register ({ email, password, nickname }) {
    await table.User.create({
      email,
      password: Password.create(password),
      nickname
    })

    return SUCCESS
  }
}
