const table = require('../table')

const getUnique = (str) => {
  return str.filter((value, index, self) => {
    return self.indexOf(value) === index
  })
}

// const SUCCESS = true

class Hashtag {
  static async findByNovel (novel) {
    const payload = {
      where: { novel }
    }
    const hashtag = await table.Hashtag.findAll(payload)

    return (!!hashtag) && hashtag.dataValues
  }

  static async findByTag (tag) {
    const payload = {
      where: { tag }
    }
    const hashtag = await table.Hashtag.findAll(payload)

    return (!!hashtag) && hashtag.dataValues
  }

  static async createTags (tags) {
    const payload = {
      
    }
  }
}

module.exports = Hashtag
