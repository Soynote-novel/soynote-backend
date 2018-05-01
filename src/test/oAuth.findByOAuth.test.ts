import { Password } from '../api'
import * as model from '../model'

class Test {
  static async findByOAuth () {
    const oAuthId = 0
    const vendor = 'vendor'

    const result = await model.OAuth.findByOAuth(oAuthId, vendor)

    console.log(result)
  }
}

Test.findByOAuth()
