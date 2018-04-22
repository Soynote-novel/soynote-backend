const table = require('../table')
// const sequelize = require('sequelize')

const SUCCESS = true

class Favorites {
  static async findByUser (userId) {
    const payload = {
      where: { userId }
    }
    const favorites = await table.Favorites.findAll(payload)

    return (!!favorites) && favorites.dataValues
  }

  static async findByNovel (novelId) {
    const payload = {
      where: { novelId }
    }
    const favorites = await table.Favorites.findAll(payload)

    return (!!favorites) && favorites.dataValues
  }

  static async create ({ userId, novelId }) {
    const payload = { userId, novelId }

    await table.Favorites.create(payload)

    return SUCCESS
  }

  static async delete ({ userId, novelId }) {
    const payload = {
      where: { userId, novelId }
    }

    await table.Favorites.destroy(payload)

    return SUCCESS
  }
}

module.exports = Favorites
