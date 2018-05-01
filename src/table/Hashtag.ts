import * as Sequelize from 'sequelize'

export let name = 'hashtag'

export let config = {
  timestamps: false
}

export let table = {
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
