import { Password } from '../api'

class Test {
  static async findById () {
    const id = 'input uuid'

    const result = model.User.findById(id)

    console.log(result)
  }
}

Test.findById()
