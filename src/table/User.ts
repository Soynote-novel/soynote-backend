import * as Sequelize from 'sequelize'

module.exports.name = 'user'

module.exports.config = {
  timestamps: true
}

module.exports.table = {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4
  },
  email: {
    type: Sequelize.CHAR(50),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.CHAR(60).BINARY,
    allowNull: false
  },
  nickname: {
    type: Sequelize.CHAR(20),
    allowNull: false,
    unique: true
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  verified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  isBlocked: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    unique: false,
    defaultValue: false
  },
  bio: {
    type: Sequelize.CHAR(80),
    allowNull: true,
    unique: false
  }
}
