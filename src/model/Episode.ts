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

  static async newNovel (novelInfo: { name: string, novel: string, isAdult: boolean, content: string, poster: string }): Promise<boolean> {
    const payload = novelInfo
    await table.Episode.create(payload)

    return SUCCESS
  }

  static async editNovel (novelInfo: { id: string, name: string, isAdult: boolean, content: string, poster: string }): Promise<boolean> {
    const { id, name, isAdult, content, poster } = novelInfo
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

export default Episode
