import { Password } from '../api'
import * as model from '../model'

class Test {
  static async findByOAuth () {
    const payload = {
      userId: 'uuid',
      oAuthId: 123,
      vendor: 'test'
    }

    const result = await model.OAuth.successRegister(payload)

    console.log(result)
  }
}

Test.findByOAuth()
