import table from '../table'
import * as sequelize from 'sequelize'

const SUCCESS = true

class Favorites {
  static async findByUser (userId: string): Promise<object|null> {
    const payload = {
      where: { userId }
    }
    const favorites = await table.Favorites.findAll(payload)

    return (!!favorites) && favorites.dataValues
  }

  static async findByNovel (novelId: string): Promise<object|null> {
    const payload = {
      where: { novelId }
    }
    const favorites = await table.Favorites.findAll(payload)

    return (!!favorites) && favorites.dataValues
  }

  static async create (info: { userId: string, novelId: string }): Promise<boolean> {
    const payload = info

    await table.Favorites.create(payload)

    return SUCCESS
  }

  static async delete (info: { userId: string, novelId: string }): Promise<boolean> {
    const { userId, novelId } = info
    const payload = {
      where: { userId, novelId }
    }

    await table.Favorites.destroy(payload)

    return SUCCESS
  }
}

export default Favorites
