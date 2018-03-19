const model = require('../model')

const email = 'jioo0224@naver.com'
const password = 'registertest'
const nickname = '볕뉘'
const userInfo = { email, password, nickname }
const result = model.User.register(userInfo)

console.log(result)
