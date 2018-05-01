import * as Sequelize from 'sequelize'

export let name = 'recentip'

export let config = {
  timestamps: true
}

export let table = {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  user: {
    type: Sequelize.UUID,
    allowNull: false
  },
  ip: {
    type: Sequelize.CHAR(16).BINARY,
    allowNull: false,
    validate: {
      isIPv4: true
    }
  }
}
