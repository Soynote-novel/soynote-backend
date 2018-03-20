const Sequelize = require('sequelize')

module.exports.name = 'comment'

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
    allowNull: false
  },
  episode: {
    type: Sequelize.UUID,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER(5),
    allowNull: false
  }
}
