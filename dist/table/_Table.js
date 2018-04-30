"use strict";
const Sequelize = require('sequelize');
const { database, username, password, config } = require('../config').db;
const Table = new Sequelize(database, username, password, config);
Table.sync();
module.exports = Table;
