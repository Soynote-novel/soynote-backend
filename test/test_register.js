const model = require('../model');

(async () => {
  try {
    let result = await model.User.register({
      email: 'jioo0224@naver.com',
      password: 'registertest',
      nickname: '볕뉘'
    })
    console.log(result)
  } catch (error) {
    console.error(error)
  }
})()
