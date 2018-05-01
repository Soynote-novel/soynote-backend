import { Password } from '../api'
import table from '../table'

const SUCCESS = true

class User {
  static async findById (id: string): Promise<any> {
    const payload = {
      where: { id }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.dataValues
  }

  static async findByEmail (email: string): Promise<any> {
    const payload = {
      where: { email }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.dataValues
  }

  static async findByNick (nickname: string): Promise<any> {
    const payload = {
      where: { nickname }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.dataValues
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
}

export default User
