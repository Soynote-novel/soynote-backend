import table from '../table'
const sequelize = require('sequelize')

const SUCCESS = true
const FAILURE = false

class Comment {
  static async findById (id: string): Promise<null|object> {
    const payload = {
      where: { id }
    }
    const comment = await table.Comment.findOne(payload)

    return (!!comment) && comment.dataValues
  }

  static async averageByEpisode (episode: string): Promise<null|object> {
    const payload = {
      attributes: [[sequelize.fn('AVG', sequelize.col('score'))]],
      where: { episode }
    }
    const comment = await table.Comment.findOne(payload)

    return (!!comment) && comment.dataValues
  }

  static async averageByNovel (novel:string): Promise<null|number> {
    const payload = {
      attributes: [[sequelize.fn('AVG', sequelize.col('score'))]],
      where: { novel }
    }
    const comment = await table.Comment.findOne(payload)

    return (!!comment) && comment.dataValues
  }

  static async newComment (comment: { writer: string, novel: string, episode:string, content:string, score:number }): Promise<boolean> {
    const { writer, novel, episode, content, score } = comment
    if (!(score >= 0 && score <= 5)) {
      return FAILURE
    } else {
      const payload = { writer, novel, episode, content, score }
      await table.Comment.create(payload)

      return SUCCESS
    }
  }

  static async editComment (comment: { id: string, content: string, score:number }) {
    const { id, content, score } = comment
    if (!(score >= 0 && score <= 5)) {
      return FAILURE
    } else {
      const payload = {
        where: { id }
      }
      const editInformation = {
        content, score
      }
      await table.Episode.update(payload, editInformation)

      return SUCCESS
    }
  }
}

export default Comment