const Sequelize = require('sequelize')

module.exports.db = {
  id: {
    id: Sequelize.INTEGER(80),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: false
  },
  writer: {
    type: Sequelize.INTEGER(20),
    allowNull: false
  },
  bio: {
    type: Sequelize.STRING(80),
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER(5),
    allowNull: false,
    defaultValue: 0
  }
}
module.exports.config = {
  timestamps: true
}
