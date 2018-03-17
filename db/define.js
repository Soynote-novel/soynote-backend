const db = require('./index')

// User table to N
// User.id -> oAuth.userId
db.User.hasMany(db.OAuth, {
  foreignKey: 'userId'
})
db.OAuth.belongsTo(db.User, {
  foreignKey: 'id'
})

// User.id -> Novel.writer
db.User.hasMany(db.Novel, {
  foreignKey: 'writer'
})

// User.id -> Comment.writer
db.User.hasMany(db.Comment, {
  foreignKey: 'writer'
})

// User.id -> Report.writer
db.User.hasMany(db.Report, {
  foreignKey: 'writer'
})

// User.id -> SubscribedAuthors.userId
db.User.hasMany(db.SubscribedAuthors, {
  foreignKey: 'user'
})

// User.id -> SubscribedAuthors.subscribedUserId
db.User.hasMany(db.SubscribedAuthors, {
  foreignKey: 'subscribedUser'
})

// User.id -> Favorites.userId
db.User.hasMany(db.Favorites, {
  foreignKey: 'userId'
})

// Novel table to N
// Novel.id -> Episode.novel
db.Novel.hasMany(db.Episode, {
  foreignKey: 'novel'
})

// Novel.id -> Favorites.novelId
db.Novel.hasMany(db.Favorites, {
  foreignKey: 'novelId'
})

// Novel.id -> Hashtag.novel
db.Novel.hasMany(db.Hashtag, {
  foreignKey: 'novel'
})

// Episode table to N
// Episode.id -> Comment.episode
db.Episode.hasMany(db.Comment, {
  foreignKey: 'episode'
})
