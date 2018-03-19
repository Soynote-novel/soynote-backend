const model = require('../model')

const oAuthId = 'oAuth user id by number'
const vendor = 'vendor'

const result = model.OAuth.findByOAuth(oAuthId, vendor)

console.log(result)
