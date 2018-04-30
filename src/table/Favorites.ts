import * as Sequelize from 'sequelize'

module.exports.name = 'favorites'

module.exports.config = {
  timestamps: true
}

module.exports.table = {
  userId: {
    type: Sequelize.UUID,
    allowNull: false
  },
  novelId: {
    type: Sequelize.UUID,
    allowNull: false
  }
}
