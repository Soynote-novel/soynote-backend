import * as model from '../model'

class Test {
  static async isValid () {
    const payload = {
      userId: 'uuid',
      oAuthId: 123,
      vendor: 'test'
    }

    const result = await model.OAuth.successRegister(payload)

    console.log(result)
  }
}

Test.isValid().catch((error) => { console.error(error)})