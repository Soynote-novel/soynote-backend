const model = require('./model');

(async () => {
  try {
    let result = await model.User.findByEmail('jioo0224@naver.com')
    if (await model.User.comparePassword('registertest', result.password)) {
      console.log('login success')
    } else {
      console.log('login failure')
    }
    console.log(result)
  } catch (error) {
    console.error(error)
  }
})()
