import * as Sequelize from 'sequelize'

const {
  database,
  username,
  password,
  config
} = require('../../config').db

const Table = new Sequelize(database, username, password, config)

export default Table
