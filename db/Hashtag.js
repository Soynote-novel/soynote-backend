const Sequelize = require('sequelize')

module.exports.config = {
  timestamps: false
}

module.exports.table = {
  novel: {
    type: Sequelize.INTEGER(80),
    allowNull: false,
    primaryKey: true
  },
  tag: {
    type: Sequelize.STRING(20),
    allowNull: false
  }
}
