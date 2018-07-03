import table from '../table'

const SUCCESS = true

class OAuth {
  static async findById (id: string): Promise<any> {
    const payload = {
      where: { id },
      include: [{ model: table.User, attributes: ['id', 'nickname', 'email', 'isAdmin'] }]
    }
    const oauth = await table.OAuth.findOne(payload)

    return (!!oauth) && oauth.toJSON()
  }

  static async findByUserId (userId: string): Promise<any> {
    const payload = {
      where: { userId },
      include: [{ model: table.User, attributes: ['id', 'nickname', 'email', 'isAdmin'] }]
    }
    const oauth = await table.OAuth.findOne(payload)

    return (!!oauth) && oauth.toJSON()
  }

  static async findByOAuth (oAuthId: number, vendor: string): Promise<any> {
    const payload = {
      where: { oAuthId, vendor },
      include: [{ model: table.User, attributes: ['id', 'nickname', 'email', 'isAdmin'] }]
    }
    const oauth = await table.OAuth.findOne(payload)

    return (!!oauth) && oauth.toJSON()
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
      where: { oAuthId, vendor },
      raw: true
    }

    let result = await table.OAuth.findOne(where)

    if (result && !result.userId) {
      const payload = { userId }

      await table.OAuth.update(payload, where)

      return SUCCESS
    } else return false
  }
}

export default OAuth
