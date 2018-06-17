import * as Sequelize from 'sequelize'

export let name = 'logs'

export let config = {
  timestamps: true
}

export let table = {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true
  },
  user: {
    type: Sequelize.UUID,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING(20),
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
