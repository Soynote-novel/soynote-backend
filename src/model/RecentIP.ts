const table = require('../table')

const SUCCESS = true

class RecentIP {
  /**
   * 가장 최근 로그인한 아이피를 로그합니다.
   * @param {Object} info 로그에 남길 정보입니다.
   * @param {string} info.user 로그를 남길 유저입니다.
   * @param {string} info.ip 유저가 로그인한 아이피입니다.
   */
  static async log (info) {
    const { user, ip } = info
    const payload = {
      user,
      ip
    }
    await table.RecentIP.create(payload)

    return SUCCESS
  }
}

module.exports = RecentIP
