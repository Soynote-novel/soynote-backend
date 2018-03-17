const model = require('../model');

(async () => {
  try {
    let result = await model.OAuth.findByOauth('oauth user id by number', 'vendor')
    console.log(result)
  } catch (error) {
    console.error(error)
  }
})()
