"use strict";
const Sequelize = require('sequelize');
module.exports.name = 'oAuth';
module.exports.config = {
    timestamps: true
};
module.exports.table = {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    userId: {
        type: Sequelize.UUID,
        allowNull: true
    },
    oAuthId: {
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
    }
};
