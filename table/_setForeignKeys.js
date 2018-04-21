// origin.foreignKey => target
const setFK = ([origin, foreignKey], target, [onUpdate, onDelete]) => {
  origin.hasMany(target, { foreignKey,
    onDelete: onDelete,
    onUpdate: onUpdate
  })
}

module.exports = (tables) => {
  setFK([tables.User, 'userId'], tables.OAuth, ['cascade', 'cascade'])
  setFK([tables.User, 'writer'], tables.Novel, ['cascade', 'cascade'])
  setFK([tables.User, 'writer'], tables.Comment, ['cascade', 'SET NULL'])
  setFK([tables.User, 'writer'], tables.Report, ['cascade', 'SET NULL'])
  setFK([tables.User, 'user'], tables.SubscribedAuthors, ['cascade', 'cascade'])
  setFK([tables.User, 'subscribedUser'], tables.SubscribedAuthors, ['cascade', 'cascade'])
  setFK([tables.User, 'userId'], tables.Favorites, ['cascade', 'cascade'])
  tables.OAuth.belongsTo(tables.User, { foreignKey: 'userId' })

  setFK([tables.Novel, 'novel'], tables.Episode, ['cascade', 'cascade'])
  setFK([tables.Novel, 'novelId'], tables.Favorites, ['cascade', 'cascade'])
  setFK([tables.Novel, 'novel'], tables.Hashtag, ['cascade', 'cascade'])

  setFK([tables.Episode, 'episode'], tables.Comment, ['cascade', 'cascade'])
  setFK([tables.Novel, 'novel'], tables.Comment, ['cascade', 'cascade'])
}
