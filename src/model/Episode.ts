import table from '../table'

const SUCCESS = true

class Episode {
  static async findById (id: string): Promise<boolean|object> {
    const payload = {
      where: { id }
    }
    const episode = await table.Episode.findOne(payload)

    return (!!episode) && episode.dataValues
  }

  static async findByNovel (novel: string): Promise<boolean|object> {
    const payload = {
      where: { novel }
    }
    const episode = await table.Episode.findAll(payload)

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
