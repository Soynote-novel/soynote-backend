class returnForm {
  static isSuccess (returnData: any): object {
    const result = {
      success: true,
      data: returnData
    }

    return result
  }
  
  static isError (error: string): object {
    const result = {
      success: false,
      description: error
    }

    return result
  }
}

export default returnForm