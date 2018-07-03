import table from '../table'

const SUCCESS = true

class SubscribedAuthors {
  static async subscribe (info: { user: string, novel: string }): Promise<boolean> {
    const { user, novel } = info
    const payload = {
      user,
      novel
    }
    await table.SubscribedAuthors.create(payload)

    return SUCCESS
  }

  static async deleteSubscribe (info: { user: string, novel: string }): Promise<boolean> {
    const { user, novel } = info
    const payload = {
      where: { user, novel }
    }
    await table.SubscribedAuthors.destroy(payload)

    return SUCCESS
  }

  static async findByUser (user: string): Promise<object|null> {
    const payload = {
      where: { user }
    }
    const subscribe = await table.SubscribedAuthors.findAll(payload)

    return (!!subscribe) && subscribe.toJSON()
  }

  static async findByNovel (novel: string): Promise<object|null> {
    const payload = {
      where: { novel }
    }
    const subscribe = await table.SubscribedAuthors.findAll(payload)

    return (!!subscribe) && subscribe.toJSON()
  }
}

export default SubscribedAuthors
