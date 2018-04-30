const Sequelize = require('sequelize')

module.exports.name = 'episode'

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
    type: Sequelize.CHAR(120),
    allowNull: false
  },
  novel: {
    type: Sequelize.UUID,
    allowNull: false
  },
  isAdult: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  poster: {
    type: Sequelize.UUID,
    allowNull: true
  },
  hit: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    defaultValue: 0
  }
}
