const table = require('../table')

const SUCCESS = true

class OAuth {
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

  static async createUser ({ userId, oAuthId, vendor }) {
    const payload = { userId, oAuthId, vendor }

    await table.OAuth.create(payload)

    return SUCCESS
  }

  static async createDummyUser ({ oAuthId, vendor }) {
    const payload = { oAuthId, vendor }

    await table.OAuth.create(payload)

    return SUCCESS
  }

  static async successRegister ({ userId, oAuthId, vendor }) {
    const where = {
      where: { oAuthId, vendor }
    }

    let result = await table.OAuth.findOne(where)

    if (result.dataValues && !result.dataValues.userId) {
      const payload = { userId }

      await table.OAuth.update(payload, where)

      return SUCCESS
    }
  }
}

module.exports = OAuth
