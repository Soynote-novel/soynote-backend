import table from '../table'

const SUCCESS = true

class Episode {
  static async getEpisodes (novel: string, page: number): Promise<object> {
    const payload = {
      where: { novel },
      attributes: ['id', 'name', 'isAdult', 'hit', 'createdAt', 'updatedAt'],
      order: [['createdAt', 'DESC']],
      limit: 20,
      offset: (page - 1) * 20
    }
    const episode = await table.Episode.findAll(payload)

    return (!!episode) && episode
  }

  static async findById (id: string): Promise<boolean|object> {
    const payload = {
      where: { id },
      include: [{ model: table.Novel, attributes: ['id', 'name', 'bio'], as: 'Novel' }]
    }
    const episode = await table.Episode.findOne(payload)

    return (!!episode) && episode.dataValues
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
