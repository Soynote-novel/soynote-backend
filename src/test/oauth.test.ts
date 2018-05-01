import { Password } from '../api'
import * as model from '../model'

class Test {
  static async findByUserId () {
    const id = 'input uuid'

    const result = await model.OAuth.findByUserId(id)

    console.log(result)
  }
}

Test.findByUserId()
