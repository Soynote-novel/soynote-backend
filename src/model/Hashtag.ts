import table from '../table'

interface BulkTag {
  novel: string,
  tag: string
}

interface BulkTags extends Array<BulkTag>{}

const SUCCESS = true

class Hashtag {
  static async findByNovel (novel: string): Promise<object|null> {
    const payload = {
      where: { novel }
    }
    const hashtag = await table.Hashtag.findAll(payload)

    return (!!hashtag) && hashtag.toJSON()
  }

  static async findByTag (tag: string): Promise<object|null> {
    const payload = {
      where: { tag }
    }
    const hashtag = await table.Hashtag.findAll(payload)

    return (!!hashtag) && hashtag.toJSON()
  }

  static async createTags (tag:{ novel: string, tags: string[] }):Promise<boolean> {
    let { novel, tags } = tag
    const payload = {
      where: { novel }
    }

    let bulkTags = this.getTags(novel, tags)

    await table.Hashtag.destroy(payload)

    await table.Hashtag.bulkCreate(bulkTags)

    return SUCCESS
  }

  private static getTags (novel: string, tags: string[]) {
    let newTags = Array.from(new Set(tags))
    let bulkTags: BulkTags = []

    newTags.forEach((current) => {
      bulkTags.push({
        novel, tag: current
      })
    })

    if( bulkTags.length > 10 ) {
      bulkTags.length = 9
    }

    return bulkTags
  }
}

export default Hashtag
