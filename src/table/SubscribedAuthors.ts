import * as Sequelize from 'sequelize'

module.exports.name = 'subscribedAuthors'

module.exports.config = {
  timestamps: true
}

module.exports.table = {
  user: {
    type: Sequelize.UUID,
    allowNull: false
  },
  subscribedUser: {
    type: Sequelize.UUID,
    allowNull: false
  }
}
