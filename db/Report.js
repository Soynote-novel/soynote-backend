const Sequelize = require('sequelize')

module.exports.db = {
  id: {
    type: Sequelize.INTEGER(120),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  writer: {
    type: Sequelize.INTEGER(20),
    allowNull: false
  },
  type: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  content: {
    type: Sequelize.STRING(120),
    allowNull: false
  },
  report: {
    type: Sequelize.INTEGER(120),
    allowNull: false
  }
}
module.exports.config = {
  timestamps: true
}
