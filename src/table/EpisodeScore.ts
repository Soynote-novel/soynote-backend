import * as Sequelize from 'sequelize'

export let name = 'episodeScore'

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
  episode: {
    type: Sequelize.UUID,
    allowNull: false,
    unique: true
  },
  novel: {
    type: Sequelize.UUID,
    allowNull: false,
    unique: false
  },
  totalScore: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    defaultValue: 0
  },
  voteCount: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    defaultValue: 0
  }
}
