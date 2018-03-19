const table = require('../table')

const SUCCESS = true

module.exports = class OAuth {
  static async findById (id) {
    const payload = {
      where: { id },
      include: { model: table.User }
    }
    const user = await table.OAuth.findOne(payload)

    if (user) {
      return { user: user.dataValues.user.dataValues }
    }
  }

  static async findByUserId (userId) {
    const payload = {
      where: { userId },
      include: { model: table.User }
    }
    const user = await table.OAuth.findOne(payload)

    if (user) {
      return { user: user.dataValues.user.dataValues }
    }
  }

  static async findByOAuth (oAuthId, vendor) {
    const payload = {
      where: { oAuthId, vendor },
      include: { model: table.User }
    }
    const user = await table.OAuth.findOne(payload)

    if (user) {
      return { user: user.dataValues.user.dataValues }
    }
  }

  static async createUser ({ userId, oAuthId, vendor, accessToken }) {
    const payload = { userId, oAuthId, vendor, accessToken }

    await table.OAuth.create(payload)

    return SUCCESS
  }

  static async createDummyUser ({ oAuthId, vendor, accessToken }) {
    const payload = { oAuthId, vendor, accessToken }

    await table.OAuth.create(payload)

    return SUCCESS
  }
}
