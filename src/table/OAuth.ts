import * as Sequelize from 'sequelize'

export let name = 'oAuth'

export let config = {
  timestamps: true
}

export let table = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: true
  },
  oAuthId: {
    type: Sequelize.STRING(128),
    allowNull: false,
    unique: false,
    validate: {
      isInt: true
    }
  },
  vendor: {
    type: Sequelize.CHAR(10),
    allowNull: false
  }
}
