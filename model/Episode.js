const table = require('../table')

const SUCCESS = true

class Episode {
  static async findById (id) {
    const payload = {
      where: { id }
    }
    const episode = await table.Episode.findOne(payload)

    return (!!episode) && episode.dataValues
  }

  static async findByNovel (novel) {
    const payload = {
      where: { novel }
    }
    const episode = await table.Episode.findAll(payload)

    return (!!episode) && episode.dataValues
  }

  static async newNovel ({ name, novel, isAdult, content, poster }) {
    const payload = {
      name, novel, isAdult, content, poster
    }
    await table.Episode.create(payload)

    return SUCCESS
  }

  static async editNovel ({ id, name, isAdult, content, poster }) {
    const payload = {
      where: { id }
    }
    const editInformation = {
      name, isAdult, content, poster
    }
    await table.Episode.update(payload, editInformation)

    return SUCCESS
  }
}

module.exports = Episode
