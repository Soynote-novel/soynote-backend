const table = require('../table')

const SUCCESS = true

class Novel {
  static async findById (id) {
    const payload = {
      where: { id }
    }
    const novel = await table.Novel.findOne(payload)

    return (!!novel) && novel.dataValues
  }

  static async findByName (name) {
    const payload = {
      wehre: { name }
    }
    const novel = await table.Novel.findAll(payload)

    return (!!novel) && novel.dataValues
  }

  static async findByWriter (writer) {
    const payload = {
      where: { writer }
    }
    const novel = await table.Novel.findAll(payload)

    return (!!novel) && novel.dataValues
  }

  static async createNovel ({ writer, name, bio }) {
    const payload = { writer, name, bio }

    await table.Novel.create(payload)

    return SUCCESS
  }

  static async deleteNovel ({ id }) {
    const payload = {
      where: {
        id
      }
    }

    await table.Novel.destroy(payload)

    return SUCCESS
  }

  static async editNovel ({id, bio}) {
    const payload = {
      where: { id }
    }
    const editInformation = { bio }

    await table.Novel.update(editInformation, payload)

    return SUCCESS
  }
}

module.exports = Novel
