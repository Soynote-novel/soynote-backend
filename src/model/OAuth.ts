import table from '../table'

const SUCCESS = true

class OAuth {
  static async findById (id: string): Promise<any> {
    const payload = {
      where: { id },
      include: { model: table.User }
    }
    const user = await table.OAuth.findOne(payload)

    if (user) {
      const result = {
        oauth: user.dataValues,
        user: user.dataValues.user ? user.dataValues.user.dataValues : ''
      }
      delete result.oauth.user
      return result
    } else return null
  }

  static async findByUserId (userId: string): Promise<any> {
    const payload = {
      where: { userId },
      include: { model: table.User }
    }
    const user = await table.OAuth.findOne(payload)

    if (user) {
      const result = {
        oauth: user.dataValues,
        user: user.dataValues.user ? user.dataValues.user.dataValues : ''
      }
      delete result.oauth.user
      return result
    } else return null
  }

  static async findByOAuth (oAuthId: number, vendor: string): Promise<any> {
    const payload = {
      where: { oAuthId, vendor },
      include: { model: table.User }
    }
    const user = await table.OAuth.findOne(payload)

    if (user) {
      const result = {
        oauth: user.dataValues,
        user: user.dataValues.user ? user.dataValues.user.dataValues : ''
      }
      delete result.oauth.user
      return result
    } else return null
  }

  static async createUser (user: { userId: string, oAuthId: number, vendor: string }): Promise<boolean> {
    const { userId, oAuthId, vendor } = user
    const payload = { userId, oAuthId, vendor }

    await table.OAuth.create(payload)

    return SUCCESS
  }

  static async createDummyUser (user: { oAuthId: number, vendor: string }): Promise<boolean> {
    const { oAuthId, vendor } = user
    const payload = { oAuthId, vendor }

    await table.OAuth.create(payload)

    return SUCCESS
  }

  static async successRegister (user: { userId: string, oAuthId: number, vendor: string }): Promise<boolean> {
    const { userId, oAuthId, vendor } = user
    const where = {
      where: { oAuthId, vendor }
    }

    let result = await table.OAuth.findOne(where)

    if (result.dataValues && !result.dataValues.user.dataValues.userId) {
      const payload = { userId }

      await table.OAuth.update(payload, where)

      return SUCCESS
    } else return false
  }
}

export default OAuth
