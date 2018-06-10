import table from '../table'

const SUCCESS = true

class Logs {
  static async log (info: { user: string, ip: string, type: string }): Promise<boolean> {
    const { user, ip, type } = info
    const payload = {
      user,
      ip,
      type
    }
    await table.Logs.create(payload)

    return SUCCESS
  }
}

export default Logs
