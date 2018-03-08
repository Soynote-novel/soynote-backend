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
  novel: {
    type: Sequelize.CHAR(36),
    allowNull: false
  },
  episode: {
    type: Sequelize.CHAR(36),
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
