import { Password } from '../api'
import * as model from '../model'

class Test {
  static async isValid () {
    const id = 'input uuid'

    const result = model.User.findById(id)

    console.log(result)
  }
}

Test.isValid().catch((error) => { console.error(error)})
