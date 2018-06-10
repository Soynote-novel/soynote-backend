import * as Sequelize from 'sequelize'

export let name = 'episode'

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
    type: Sequelize.CHAR(120),
    allowNull: false
  },
  novel: {
    type: Sequelize.UUID,
    allowNull: false
  },
  isAdult: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  hit: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    defaultValue: 0
  }
}
