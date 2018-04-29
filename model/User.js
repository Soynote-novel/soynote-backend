const { Password } = require('../api')
const table = require('../table')

const SUCCESS = true

class User {
  /**
   * ID로 유저정보를 찾습니다.
   * @param {string} id UUID형식의 찾을 유저의 ID
   */
  static async findById (id) {
    const payload = {
      where: { id }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.dataValues
  }

  /**
   * E-Mail로 유저정보를 찾습니다.
   * @param {string} email 찾을 유저의 E-Mail
   */
  static async findByEmail (email) {
    const payload = {
      where: { email }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.dataValues
  }

  /**
   * 닉네임으로 유저정보를 찾습니다.
   * @param {string} nickname 찾을 유저의 닉네임
   */
  static async findByNick (nickname) {
    const payload = {
      where: { nickname }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.dataValues
  }

  /**
   * 회원가입용 메소드입니다.
   * @param {Object} user 회원가입을 할 유저의 상세정보입니다.
   * @param {string} user.email 유저의 이메일입니다.
   * @param {string} user.password 유저의 평문 패스워드입니다.
   * @param {string} user.nickname 유저의 닉네임입니다.
   */
  static async register (user) {
    const { email, password, nickname } = user

    const payload = {
      email,
      password: await Password.signature(password),
      nickname
    }

    await table.User.create(payload)

    return SUCCESS
  }

  /**
   * 회원탈퇴를 하는 메소드입니다.
   * @param {string} id 회원탈퇴를 진행할 유저의 ID
   */
  static async unregister (id) {
    const payload = {
      where: { id }
    }

    await table.User.destroy(payload)

    return SUCCESS
  }
}

module.exports = User
