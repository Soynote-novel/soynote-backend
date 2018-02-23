const Sequelize = require('sequelize')

module.exports.config = {
  timestamps: true
}

module.exports.table = {
  id: {
    type: Sequelize.INTEGER(20),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
    validate: {
      isInt: true
    }
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING(256),
    allowNull: false
  },
  nickname: {
    type: Sequelize.STRING(20),
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
    type: Sequelize.STRING(80),
    allowNull: true,
    unique: false
  },
  profilePhoto: {
    type: Sequelize.STRING(40),
    allowNull: true
  },
  favorites: {
    type: Sequelize.JSON,
    allowNull: true
  },
  subscribedAuthors: {
    type: Sequelize.JSON,
    allowNull: true
  },
  recentIp: {
    type: Sequelize.JSON,
    allowNull: true
  }
}
