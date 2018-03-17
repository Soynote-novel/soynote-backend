const Sequelize = require('sequelize')

module.exports.config = {
  timestamps: true
}

module.exports.table = {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
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
  }
}
