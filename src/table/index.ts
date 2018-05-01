import Table from  './_Table'
import setForeignKeys from './_setForeignKeys'
import * as tableList from './_tables'

const defineTable = (tableConfig: { name: any, table: any, config: any }): any => {
  const { name, table, config } = tableConfig
  return Table.define(name, table, config)
}

const tables = {
  User: defineTable(tableList.User),
  OAuth: defineTable(tableList.OAuth),
  Novel: defineTable(tableList.Novel),
  Episode: defineTable(tableList.Episode),
  Comment: defineTable(tableList.Comment),
  Report: defineTable(tableList.Report),
  Hashtag: defineTable(tableList.Hashtag),
  SubscribedAuthors: defineTable(tableList.SubscribedAuthors),
  Favorites: defineTable(tableList.Favorites),
  RecentIP: defineTable(tableList.RecentIP)
}

setForeignKeys(tables)

Table.sync()

export default tables
