const Sequelize = require('sequelize')

module.exports.config = {
  timestamps: true
}

module.exports.table = {
  id: {
    type: Sequelize.CHAR(36),
    allowNull: false,
    primaryKey: true,
    unique: true,
    validate: {
      isInt: true
    }
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
    type: Sequelize.CHAR(256),
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
  },
  profilePhoto: {
    type: Sequelize.CHAR(40),
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
