const db = require('./index')

// User table to N
// User.id -> oAuth.userId
db.User.hasMany(db.OAuth, {
  foreignKey: 'id'
})
db.OAuth.belongsTo(db.User, {
  foreignKey: 'userId'
})

// User.id -> Novel.writer
db.User.hasMany(db.Novel, {
  foreignKey: 'id'
})
db.Novel.belongsTo(db.User, {
  foreignKey: 'writer'
})

// User.id -> Comment.writer
db.User.hasMany(db.Comment, {
  foreignKey: 'id'
})
db.Comment.belongsTo(db.User, {
  foreignKey: 'writer'
})

// User.id -> Report.writer
db.User.hasMany(db.Report, {
  foreignKey: 'id'
})
db.Report.belongsTo(db.User, {
  foreignKey: 'writer'
})

// User.id -> SubscribedAuthors.userId
db.User.hasMany(db.SubscribedAuthors, {
  foreignKey: 'id'
})
db.SubscribedAuthors.belongsTo(db.User, {
  foreignKey: 'userId'
})

// User.id -> SubscribedAuthors.subscribedUserId
db.User.hasMany(db.SubscribedAuthors, {
  foreignKey: 'id'
})
db.SubscribedAuthors.belongsTo(db.User, {
  foreignKey: 'subscribedUserId'
})

// User.id -> Favorites.userId
db.User.hasMany(db.Favorites, {
  foreignKey: 'id'
})
db.User.belongsTo(db.User, {
  foreignKey: 'userId'
})

// Novel table to N
// Novel.id -> Episode.novel
db.Novel.hasMany(db.Episode, {
  foreignKey: 'id'
})
db.Episode.belongsTo(db.Novel, {
  foreignKey: 'novel'
})

// Novel.id -> Favorites.novelId
db.Novel.hasMany(db.Favorites, {
  foreignKey: 'novelId'
})
db.Favorites.belongsTo(db.Novel, {
  foreignKey: 'novelId'
})

// Novel.id -> Hashtag.novel
db.Novel.hasMany(db.Hashtag, {
  foreignKey: 'novel'
})
db.Favorites.belongsTo(db.Novel, {
  foreignKey: 'novel'
})

// Episode table to N
// Episode.id -> Comment.episode
db.Episode.hasMany(db.Comment, {
  foreignKey: 'id'
})
db.Comment.belongsTo(db.Episode, {
  foreignKey: 'episode'
})
