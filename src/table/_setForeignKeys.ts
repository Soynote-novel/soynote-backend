const setFK = (origin: any, foreignKey:string, target: any, onUpdate:string, onDelete:string): void => {
  origin.hasMany(target, { foreignKey,
    onDelete: onDelete,
    onUpdate: onUpdate
  })
}

export default (tables: any) => {
  setFK(tables.User, 'userId', tables.OAuth, 'cascade', 'cascade')
  setFK(tables.User, 'writer', tables.Novel, 'cascade', 'cascade')
  setFK(tables.User, 'writer', tables.Comment, 'cascade', 'SET NULL')
  setFK(tables.User, 'writer', tables.Report, 'cascade', 'SET NULL')
  setFK(tables.User, 'user', tables.SubscribedAuthors, 'cascade', 'cascade')
  setFK(tables.User, 'subscribedUser', tables.SubscribedAuthors, 'cascade', 'cascade')
  setFK(tables.User, 'userId', tables.Favorites, 'cascade', 'cascade')
  setFK(tables.User, 'user', tables.Logs, 'cascade', 'cascade')
  tables.OAuth.belongsTo(tables.User, { foreignKey: 'userId' })
  tables.Novel.belongsTo(tables.User, { foreignKey: 'writer', as: 'Writer' })

  setFK(tables.Novel, 'novel', tables.Episode, 'cascade', 'cascade')
  setFK(tables.Novel, 'novelId', tables.Favorites, 'cascade', 'cascade')
  setFK(tables.Novel, 'novel', tables.Hashtag, 'cascade', 'cascade')
  setFK(tables.Novel, 'novel', tables.Comment, 'cascade', 'cascade')
  setFK(tables.Novel, 'novel', tables.EpisodeScore, 'cascade', 'cascade')
  tables.Episode.belongsTo(tables.Novel, { foreignKey: 'novel', as: 'Novel'})

  setFK(tables.Episode, 'episode', tables.Comment, 'cascade', 'cascade')
  setFK(tables.Episode, 'episode', tables.EpisodeScore, 'cascade', 'cascade')
}
