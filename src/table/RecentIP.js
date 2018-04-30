const Sequelize = require('sequelize')

module.exports.name = 'recentip'

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
  user: {
    type: Sequelize.UUID,
    allowNull: false
  },
  ip: {
    type: Sequelize.CHAR(16).BINARY,
    allowNull: false,
    validate: {
      isIPv4: true
    }
  }
}
