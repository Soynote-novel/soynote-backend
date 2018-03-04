const db = require('./model');

(async () => {
  try {
    let data = await db.User.findByEmail('jioo0224@naver.com')
    console.log(data)
  } catch (error) {
    console.error(error)
  }
})()
