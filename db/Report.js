const Sequelize = require('sequelize')

module.exports.config = {
  timestamps: true
}

module.exports.table = {
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
