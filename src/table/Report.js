const Sequelize = require('sequelize')

module.exports.name = 'report'

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
  writer: {
    type: Sequelize.UUID,
    allowNull: true
  },
  type: {
    type: Sequelize.CHAR(10),
    allowNull: false
  },
  status: {
    type: Sequelize.CHAR(10),
    allowNull: false
  },
  content: {
    type: Sequelize.CHAR(255),
    allowNull: false
  },
  report: {
    type: Sequelize.UUID,
    allowNull: false
  }
}
