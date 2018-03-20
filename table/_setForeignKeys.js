// origin.foreignKey => target
const setFK = (originTable, target) => {
  const [origin, foreignKey] = originTable

  origin.hasMany(target, { foreignKey })
}

module.exports = (tables) => {
  setFK([tables.User, 'userId'], tables.OAuth)
  setFK([tables.User, 'writer'], tables.Novel)
  setFK([tables.User, 'writer'], tables.Comment)
  setFK([tables.User, 'writer'], tables.Report)
  setFK([tables.User, 'user'], tables.SubscribedAuthors)
  setFK([tables.User, 'subscribedUser'], tables.SubscribedAuthors)
  setFK([tables.User, 'userId'], tables.Favorites)
  tables.OAuth.belongsTo(tables.User, { foreignKey: 'userId' })

  setFK([tables.Novel, 'novel'], tables.Episode)
  setFK([tables.Novel, 'novelId'], tables.Favorites)
  setFK([tables.Novel, 'novel'], tables.Hashtag)

  setFK([tables.Episode, 'episode'], tables.Comment)
}
