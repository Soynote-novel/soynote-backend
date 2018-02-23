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
  name: {
    type: Sequelize.STRING(120),
    allowNull: false
  },
  novel: {
    type: Sequelize.STRING(80),
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
    type: Sequelize.STRING(80),
    allowNull: true
  },
  score: {
    type: Sequelize.INTEGER(5),
    allowNull: false
  },
  hit: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    defaultValue: 0
  }
}
