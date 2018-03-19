const model = require('../model')
const { Password } = require('../api')

const email = 'jioo0224@naver.com'
const result = model.User.findByEmail(email)

console.log(result)

if (Password.isValid('registertest', result.password)) {
  console.log('login success')
} else {
  console.log('login failure')
}
