import * as Sequelize from 'sequelize'

export let name = 'report'

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
  writer: {
    type: Sequelize.UUID,
    allowNull: true
  },
  type: {
    type: Sequelize.CHAR(10),
    allowNull: false
  },
  status: {
    type: Sequelize.CHAR(10),
    allowNull: false
  },
  content: {
    type: Sequelize.CHAR(255),
    allowNull: false
  },
  report: {
    type: Sequelize.UUID,
    allowNull: false
  }
}
