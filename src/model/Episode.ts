import table from '../table'
import * as sequelize from 'sequelize'

const SUCCESS = true

class Episode {
  static async getAmount (novel: string): Promise<number> {
    const payload = {
      where: { novel }
    }

    const amount = table.Episode.count(payload)

    return (!!amount) && amount
  }

  static async findById (id: string): Promise<boolean|object> {
    const payload = {
      where: { id },
      include: [{ model: table.Novel, attributes: ['id', 'name', 'bio'], as: 'Novel' }]
    }
    const episode = await table.Episode.findOne(payload)

    return (!!episode) && episode.toJSON()
  }

  static async newEpisode (episode: { name: string, novel: string, isAdult: boolean, content: string }): Promise<boolean> {
    const payload = episode
    await table.Episode.create(payload)

    return SUCCESS
  }

  static async editNovel (episode: { id: string, name: string, isAdult: boolean, content: string }): Promise<boolean> {
    const { id, name, isAdult, content } = episode
    const payload = {
      where: { id }
    }
    const editInformation = {
      name, isAdult, content
    }
    await table.Episode.update(payload, editInformation)

    return SUCCESS
  }
}

export default Episode
