const uuidv4 = require('uuid/v4')

module.exports = (db) => {
  return new Promise(async (resolve, reject) => {
    async function generate (db, resolve, reject) {
      try {
        const uuid = uuidv4()
        const result = await db(uuid)
        if (result) {
          resolve(uuid)
        } else {
          generate(db, resolve, reject)
        }
      } catch (error) {
        reject(error)
      }
    }
    try {
      generate(db, resolve, reject)
    } catch (error) {
      reject(error)
    }
  })
}
