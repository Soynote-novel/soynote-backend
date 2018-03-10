const uuidv4 = require('uuid/v4')

module.exports = async (db) => {
  let uuid = uuidv4()
  while (!await db(uuid)) uuid = uuidv4()
  return uuid
}
