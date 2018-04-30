const model = require('../model')
import { Password } from '../api'

class Test {
  static async isValid () {
    const email = 'jioo0224@naver.com'
    const target = await model.User.findByEmail(email)

    console.log(target)

    const plain = 'registertest'

    const isValid = await Password.isValid(plain, target.password)
    if (isValid) {
      console.log('login success')
    } else {
      console.log('login failure')
    }
  }
}

Test.isValid()
