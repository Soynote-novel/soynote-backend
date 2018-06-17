import * as Sequelize from 'sequelize'

export let name = 'hashtag'

export let config = {
  timestamps: false
}

export let table = {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true
  },
  novel: {
    type: Sequelize.UUID,
    allowNull: false,
    unique: false
  },
  tag: {
    type: Sequelize.CHAR(20),
    allowNull: false
  }
}
