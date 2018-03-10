const Sequelize = require('sequelize')

module.exports.config = {
  timestamps: true
}

module.exports.table = {
  id: {
    type: Sequelize.CHAR(36),
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  writer: {
    type: Sequelize.CHAR(36),
    allowNull: false
  },
  type: {
    type: Sequelize.CHAR(10),
    allowNull: false
  },
  content: {
    type: Sequelize.CHAR(255),
    allowNull: false
  },
  report: {
    type: Sequelize.CHAR(36),
    allowNull: false
  }
}
