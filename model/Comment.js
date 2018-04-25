const table = require('../table')
const sequelize = require('sequelize')

const SUCCESS = true
const FAILURE = false

class Comment {
  static async findById (id) {
    const payload = {
      where: { id }
    }
    const comment = await table.Comment.findOne(payload)

    return (!!comment) && comment.dataValues
  }

  static async averageByEpisode (episode) {
    const payload = {
      attributes: [[sequelize.fn('AVG', sequelize.col('score'))]],
      where: { episode }
    }
    const comment = await table.Comment.findOne(payload)

    return (!!comment) && comment.dataValues
  }

  static async averageByNovel (novel) {
    const payload = {
      attributes: [[sequelize.fn('AVG', sequelize.col('score'))]],
      where: { novel }
    }
    const comment = await table.Comment.findOne(payload)

    return (!!comment) && comment.dataValues
  }

  static async newComment ({ writer, novel, episode, content, score }) {
    if (!(score >= 0 && score <= 5)) {
      return FAILURE
    } else {
      const payload = { writer, novel, episode, content, score }
      await table.Comment.create(payload)

      return SUCCESS
    }
  }

  static async editComment ({ id, content, score }) {
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

module.exports = Comment
