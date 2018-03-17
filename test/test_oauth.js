const model = require('../model');

(async () => {
  try {
    let result = await model.OAuth.findByUserId('input uuid')
    console.log(result)
  } catch (error) {
    console.error(error)
  }
})()
