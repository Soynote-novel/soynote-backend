import table from '../table'

const getUnique = (str: string): string => {
  return str.filter((value: any, index: any, self: any) => {
    return self.indexOf(value) === index
  })
}

// const SUCCESS = true

class Hashtag {
  static async findByNovel (novel: string) {
    const payload = {
      where: { novel }
    }
    const hashtag = await table.Hashtag.findAll(payload)

    return (!!hashtag) && hashtag.dataValues
  }

  static async findByTag (tag: string) {
    const payload = {
      where: { tag }
    }
    const hashtag = await table.Hashtag.findAll(payload)

    return (!!hashtag) && hashtag.dataValues
  }

  static async createTags (tags: string) {
    const payload = {
      
    }
  }
}

module.exports = Hashtag
