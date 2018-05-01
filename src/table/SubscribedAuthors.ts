import * as Sequelize from 'sequelize'

export let name = 'subscribedAuthors'

export let config = {
  timestamps: true
}

export let table = {
  user: {
    type: Sequelize.UUID,
    allowNull: false
  },
  subscribedUser: {
    type: Sequelize.UUID,
    allowNull: false
  }
}
