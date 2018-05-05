import { Password } from '../api'
import table from '../table'

const SUCCESS = true

class Report {
  static async findById (id: string): Promise<any> {
    const payload = {
      where: { id }
    }
    const user = await table.Report.findOne(payload)

    return (!!user) && user.dataValues
  }

  static async userId (writer: string): Promise<any> {
    const payload = {
      where: { writer }
    }
    const user = await table.User.findOne(payload)

    return (!!user) && user.dataValues
  }

  static async create (create: { writer: string, type: string, status: string, content: string, report: string }): Promise<boolean> {
    const payload = create

    await table.Report.create(payload)

    return SUCCESS
  }

  static async unregister (id: string): Promise<boolean> {
    const payload = {
      where: { id }
    }

    await table.Report.destroy(payload)

    return SUCCESS
  }
}

export default Report
