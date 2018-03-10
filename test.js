const uuidGen = require('./model/UUIDGen');

(async () => {
  try {
    let result = await uuidGen((result) => {
      return new Promise((resolve, reject) => {
        resolve(true)
      })
    })
    console.log(result)
  } catch (error) {
    console.error(error)
  }
})()
