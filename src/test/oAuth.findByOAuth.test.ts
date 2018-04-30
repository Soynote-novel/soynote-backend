import { Password } from '../api'

class Test {
  static async findByOAuth () {
    const oAuthId = 'oAuth user id by number'
    const vendor = 'vendor'

    const result = await model.OAuth.findByOAuth(oAuthId, vendor)

    console.log(result)
  }
}

Test.findByOAuth()
