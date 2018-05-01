import { Password } from '../api'
import * as model from '../model'

class Test {
  static async register () {
    try {
      const email = 'jioo0224@naver.com'
      const password = 'registertest'
      const nickname = '볕뉘'
      const userInfo = { email, password, nickname }

      const result = await model.User.register(userInfo)

      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
}

Test.register()
