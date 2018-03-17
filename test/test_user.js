const model = require('../model');

(async () => {
  try {
    let result = await model.User.findById('input uuid')
    console.log(result)
  } catch (error) {
    console.error(error)
  }
})()
