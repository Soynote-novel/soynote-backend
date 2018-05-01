import table from '../table'

const SUCCESS = true

class RecentIP {
  static async log (info: { user: string, ip: string }): Promise<boolean> {
    const { user, ip } = info
    const payload = {
      user,
      ip
    }
    await table.RecentIP.create(payload)

    return SUCCESS
  }
}

export default RecentIP
