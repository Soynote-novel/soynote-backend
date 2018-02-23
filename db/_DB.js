const Sequelize = require('sequelize')

const {
  database,
  username,
  password,
  host
} = require('../config').db

module.exports = new Sequelize(database, username, password, {
  host,
  dialect: 'mysql',
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
})
