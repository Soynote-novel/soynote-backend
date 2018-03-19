const model = require('../model')

class Test {
  static async register () {
    const email = 'jioo0224@naver.com'
    const password = 'registertest'
    const nickname = '볕뉘'
    const userInfo = { email, password, nickname }

    const result = await model.User.register(userInfo)

    console.log(result)
  }
}

Test.register()
