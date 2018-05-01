import table from '../table'

const SUCCESS = true

class Hashtag {
  static async findByNovel (novel: string): Promise<object|null> {
    const payload = {
      where: { novel }
    }
    const hashtag = await table.Hashtag.findAll(payload)

    return (!!hashtag) && hashtag.dataValues
  }

  static async findByTag (tag: string): Promise<object|null> {
    const payload = {
      where: { tag }
    }
    const hashtag = await table.Hashtag.findAll(payload)

    return (!!hashtag) && hashtag.dataValues
  }

  static async createTags (tags: string):Promise<boolean> {
    const payload = {
      
    }

    return SUCCESS
  }
}

export default Hashtag
