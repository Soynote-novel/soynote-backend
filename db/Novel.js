const Sequelize = require('sequelize')

module.exports.config = {
  timestamps: true
}

module.exports.table = {
  id: {
    type: Sequelize.CHAR(36),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  name: {
    type: Sequelize.CHAR(100),
    allowNull: false,
    unique: false
  },
  writer: {
    type: Sequelize.CHAR(36),
    allowNull: false
  },
  bio: {
    type: Sequelize.CHAR(80),
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER(5),
    allowNull: false,
    defaultValue: 0
  }
}
