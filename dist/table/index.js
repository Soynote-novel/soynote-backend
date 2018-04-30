"use strict";
const Table = require('./_Table');
const setForeignKeys = require('./_setForeignKeys');
const defineTable = ({ name, table, config }) => Table.define(name, table, config);
const tables = {
    User: defineTable(require('./User')),
    OAuth: defineTable(require('./OAuth')),
    Novel: defineTable(require('./Novel')),
    Episode: defineTable(require('./Episode')),
    Comment: defineTable(require('./Comment')),
    Report: defineTable(require('./Report')),
    Hashtag: defineTable(require('./Hashtag')),
    SubscribedAuthors: defineTable(require('./SubscribedAuthors')),
    Favorites: defineTable(require('./Favorites')),
    RecentIP: defineTable(require('./RecentIP'))
};
setForeignKeys(tables);
module.exports = tables;
