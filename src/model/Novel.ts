import table from '../table'

const SUCCESS = true

class Novel {
  static async getEpisodes (novel: string, page: number): Promise<object> {
    const payload = {
      where: { id: novel },
      include: [{ model: table.User, attributes: ['id', 'nickname', 'bio'], as: 'Writer' },
        { model: table.Episode,
          attributes: ['id', 'name', 'isAdult', 'hit', 'createdAt', 'updatedAt'],
        }],
      order: [[{ model: table.Episode}, 'createdAt',  'desc']],
      limit: 20,
      offset: (page - 1) * 20
    }
    const episode = await table.Novel.findOne(payload)

    return (!!episode) && episode.toJSON()
  }

  static async getNovels (page: number): Promise<object> {
    const payload = {
      include: [{ model: table.User, attributes: ['id', 'nickname', 'bio'], as: 'Writer' }],
      attributes: ['id', 'name', 'bio', 'createdAt', 'updatedAt'],
      order: [['createdAt', 'DESC']],
      limit: 20,
      offset: (page - 1) * 20
    }
    const novel = await table.Novel.findAll(payload)

    return (!!novel) && novel.toJSON()
  }

  static async findById (id: string): Promise<object|null> {
    const payload = {
      where: { id },
      include: [{ model: table.User, attributes: ['id', 'nickname', 'bio'], as: 'Writer' }],
      attributes: ['id', 'name', 'bio', 'createdAt', 'updatedAt']
    }
    const novel = await table.Novel.findOne(payload)

    return (!!novel) && novel.toJSON()
  }

  static async findByName (name: string): Promise<object|null> {
    const payload = {
      wehre: { name },
      include: [{ model: table.User, attributes: ['id', 'nickname', 'bio'], as: 'Writer' }],
      attributes: ['id', 'name', 'bio', 'createdAt', 'updatedAt']
    }
    const novel = await table.Novel.findAll(payload)

    return (!!novel) && novel.toJSON()
  }

  static async findByWriter (writer:string): Promise<object|null> {
    const payload = {
      where: { writer },
      include: [{ model: table.User, attributes: ['id', 'nickname', 'bio'], as: 'Writer' }],
      attributes: ['id', 'name', 'bio', 'createdAt', 'updatedAt']
    }
    const novel = await table.Novel.findAll(payload)

    return (!!novel) && novel.toJSON()
  }

  static async createNovel (Novel: { writer: string, name: string, bio: string }): Promise<boolean> {
    const payload = Novel

    await table.Novel.create(payload)

    return SUCCESS
  }

  static async deleteNovel (id: string): Promise<boolean> {
    const payload = {
      where: {
        id
      }
    }

    await table.Novel.destroy(payload)

    return SUCCESS
  }

  static async editNovel (Novel: { id: string, bio: string }): Promise<boolean> {
    const { id, bio } = Novel
    const payload = {
      where: { id }
    }
    const editInformation = { bio }

    await table.Novel.update(editInformation, payload)

    return SUCCESS
  }
}

export default Novel
