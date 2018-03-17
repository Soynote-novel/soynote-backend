const Sequelize = require('sequelize')

module.exports.config = {
  timestamps: true
}

module.exports.table = {
  userId: {
    type: Sequelize.UUID,
    allowNull: false
  },
  subscribedUserId: {
    type: Sequelize.UUID,
    allowNull: false
  }
}
