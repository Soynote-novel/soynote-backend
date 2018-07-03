import { Password } from '../api'
import table from '../table'

const SUCCESS = true

class User {
  static async findById (id: string): Promise<any> {
    const payload = {
      where: { id }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.toJSON()
  }

  static async findByEmail (email: string): Promise<any> {
    const payload = {
      where: { email }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.toJSON()
  }

  static async findByNick (nickname: string): Promise<any> {
    const payload = {
      where: { nickname }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.toJSON()
  }

  static async register (user: { email: string, password: string, nickname: string }): Promise<boolean> {
    const { email, password, nickname } = user

    const payload = {
      email,
      password: await Password.signature(password),
      nickname
    }

    await table.User.create(payload)

    return SUCCESS
  }

  static async unregister (id: string): Promise<boolean> {
    const payload = {
      where: { id }
    }

    await table.User.destroy(payload)

    return SUCCESS
  }

  static async verifyUser (id: string): Promise<boolean> {
    const payload = {
      where: { id }
    }
    const updateData = {
      verified: true
    }

    await table.User.update(updateData, payload)
    return SUCCESS
  }

  static async blockUser (id: string): Promise<boolean> {
    const payload = {
      where: { id }
    }
    const updateData = {
      isBlocked: true
    }

    await table.User.update(updateData, payload)
    return SUCCESS
  }

  static async unBlockUser (id: string): Promise<boolean> {
    const payload = {
      where: { id }
    }
    const updateData = {
      isBlocked: false
    }

    await table.User.update(updateData, payload)
    return SUCCESS
  }

  static async setAdmin (id: string): Promise<boolean> {
    const payload = {
      where: { id }
    }
    const updateData = {
      isAdmin: true
    }

    await table.User.update(updateData, payload)
    return SUCCESS
  }

  static async unSetAdmin (id: string): Promise<boolean> {
    const payload = {
      where: { id }
    }
    const updateData = {
      isAdmin: false
    }

    await table.User.update(updateData, payload)
    return SUCCESS
  }
}

export default User
