import * as Sequelize from 'sequelize'

export let name = 'favorites'

export let config = {
  timestamps: true
}

export let table = {
  userId: {
    type: Sequelize.UUID,
    allowNull: false
  },
  novelId: {
    type: Sequelize.UUID,
    allowNull: false
  }
}
