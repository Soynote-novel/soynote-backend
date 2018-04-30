import * as Sequelize from 'sequelize'

module.exports.name = 'hashtag'

module.exports.config = {
  timestamps: false
}

module.exports.table = {
  novel: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true
  },
  tag: {
    type: Sequelize.CHAR(20),
    allowNull: false
  }
}
