import table from '../table'

const SUCCESS = true

class Novel {
  static async findById (id: string): Promise<object|null> {
    const payload = {
      where: { id },
      include: [{model: table.User, attributes: ['id', 'nickname', 'bio'], as: 'Writer' }],
      attributes: ['id', 'name', 'bio', 'createdAt', 'updatedAt']
    }
    const novel = await table.Novel.findOne(payload)

    return (!!novel) && novel.dataValues
  }

  static async findByName (name: string): Promise<object|null> {
    const payload = {
      wehre: { name },
      include: [{ model: table.User, attributes: ['id', 'nickname', 'bio'], as: 'Writer' }],
      attributes: ['id', 'name', 'bio', 'createdAt', 'updatedAt']
    }
    const novel = await table.Novel.findAll(payload)

    return (!!novel) && novel.dataValues
  }

  static async findByWriter (writer:string): Promise<object|null> {
    const payload = {
      where: { writer },
      include: [{ model: table.User, attributes: ['id', 'nickname', 'bio'], as: 'Writer' }],
      attributes: ['id', 'name', 'bio', 'createdAt', 'updatedAt']
    }
    const novel = await table.Novel.findAll(payload)

    return (!!novel) && novel.dataValues
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
