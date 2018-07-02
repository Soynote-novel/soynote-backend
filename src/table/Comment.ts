import * as Sequelize from 'sequelize'

export let name = 'comment'

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
  novel: {
    type: Sequelize.UUID,
    allowNull: false
  },
  episode: {
    type: Sequelize.UUID,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER(1),
    allowNull: false
  }
}
