import * as Sequelize from 'sequelize'

export let name = 'novel'

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
  name: {
    type: Sequelize.CHAR(100),
    allowNull: false,
    unique: false
  },
  writer: {
    type: Sequelize.UUID,
    allowNull: false
  },
  bio: {
    type: Sequelize.CHAR(80),
    allowNull: false
  }
}
