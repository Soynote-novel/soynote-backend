const Sequelize = require('sequelize')

module.exports.config = {
  timestamps: true
}

module.exports.table = {
  id: {
    type: Sequelize.INTEGER(40),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
    validate: {
      isInt: true
    }
  },
  userId: {
    type: Sequelize.STRING(20),
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
    type: Sequelize.STRING(20),
    allowNull: false
  },
  accessToken: {
    type: Sequelize.STRING(64),
    allowNull: false
  }
}
