const table = require('../table')

const SUCCESS = true

class RecentIP {
  static async log ({ user, ip }) {
    const payload = {
      user,
      ip
    }
    await table.RecentIP.create(payload)

    return SUCCESS
  }
}

module.exports = RecentIP
