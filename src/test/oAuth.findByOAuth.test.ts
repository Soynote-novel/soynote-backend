import { Password } from '../api'
import * as model from '../model'

class Test {
  static async isValid () {
    const oAuthId = 0
    const vendor = 'vendor'

    const result = await model.OAuth.findByOAuth(oAuthId, vendor)

    console.log(result)
  }
}

Test.isValid().catch((error) => { console.error(error)})
