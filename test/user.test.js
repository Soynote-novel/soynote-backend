const model = require('../model')

const result = model.User.findById('input uuid')

console.log(result)
