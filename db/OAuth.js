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
  userId: {
    type: Sequelize.CHAR(36),
    allowNull: false
  },
  oauthId: {
    type: Sequelize.INTEGER(64),
    allowNull: false,
    unique: false,
    validate: {
      isInt: true
    }
  },
  vendor: {
    type: Sequelize.CHAR(10),
    allowNull: false
  },
  accessToken: {
    type: Sequelize.CHAR(64),
    allowNull: false
  }
}
