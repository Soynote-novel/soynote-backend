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
  novel: {
    type: Sequelize.INTEGER(80),
    allowNull: false
  },
  episode: {
    type: Sequelize.INTEGER(120),
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
