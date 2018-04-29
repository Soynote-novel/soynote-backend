const table = require('../table')

const SUCCESS = true

class OAuth {
  /**
   * OAuth 고유ID로 유저의 정보를 찾습니다.
   * @param {string} id OAuth 고유ID
   */
  static async findById (id) {
    const payload = {
      where: { id },
      include: { model: table.User }
    }
    const user = await table.OAuth.findOne(payload)

    if (user) {
      const result = {
        oauth: user.dataValues,
        user: user.dataValues.user ? user.dataValues.user.dataValues : ''
      }
      delete result.oauth.user
      return result
    }
  }

  /**
   * User 고유ID로 유저의 정보를 찾습니다.
   * @param {string} userId User 고유ID
   */
  static async findByUserId (userId) {
    const payload = {
      where: { userId },
      include: { model: table.User }
    }
    const user = await table.OAuth.findOne(payload)

    if (user) {
      const result = {
        oauth: user.dataValues,
        user: user.dataValues.user ? user.dataValues.user.dataValues : ''
      }
      delete result.oauth.user
      return result
    }
  }

  /**
   * OAuth 정보로 유저의 정보를 찾습니다.
   * @param {number} oAuthId vendor에서 제공한 유저의 고유id입니다
   * @param {string} vendor OAuth 제공사의 고유코드입니다.
   */
  static async findByOAuth (oAuthId, vendor) {
    const payload = {
      where: { oAuthId, vendor },
      include: { model: table.User }
    }
    const user = await table.OAuth.findOne(payload)

    if (user) {
      const result = {
        oauth: user.dataValues,
        user: user.dataValues.user ? user.dataValues.user.dataValues : ''
      }
      delete result.oauth.user
      return result
    }
  }

  /**
   * 유저의 OAuth 정보를 생성합니다.
   * @param {Object} user 생성할 유저의 상세정보입니다.
   * @param {string} user.userId 유저 고유ID
   * @param {number} user.oAuthId Vendor에서 제공하는 유저의 고유ID
   * @param {string} user.vendor OAuth 제공사의 고유코드
   */
  static async createUser (user) {
    const { userId, oAuthId, vendor } = user
    const payload = { userId, oAuthId, vendor }

    await table.OAuth.create(payload)

    return SUCCESS
  }

  /**
   * OAuth 연동이 수행되지 않은 더미유저를 생성합니다.
   * @param {Object} user 생성할 더미유저의 상세정보입니다.
   * @param {number} user.oAuthId Vendor에서 제공하는 유저의 고유ID
   * @param {string} user.vendor OAuth 제공사의 고유코드
   */
  static async createDummyUser (user) {
    const { oAuthId, vendor } = user
    const payload = { oAuthId, vendor }

    await table.OAuth.create(payload)

    return SUCCESS
  }

  /**
   * 더미유저의 회원가입을 완료시킵니다.
   * @param {Object} user 더미유저 및 회원의 정보입니다.
   * @param {string} user.userId 회원가입한 유저의 정보입니다.
   * @param {number} user.oAuthId 더미유저의 OAuth ID입니다.
   * @param {string} user.vendor 더미유저의 OAuth 제공사 고유코드입니다.
   */
  static async successRegister (user) {
    const { userId, oAuthId, vendor } = user
    const where = {
      where: { oAuthId, vendor }
    }

    let result = await table.OAuth.findOne(where)

    if (result.dataValues && !result.dataValues.userId) {
      const payload = { userId }

      await table.OAuth.update(payload, where)

      return SUCCESS
    }
  }
}

module.exports = OAuth
