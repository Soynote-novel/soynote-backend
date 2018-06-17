class returnForm {
  static isSuccess (returnData: any): object {
    const result = {
      success: true,
      error: false,
      data: returnData
    }

    return result
  }
  
  static isError (error: string): object {
    const result = {
      error: true,
      success: false,
      data: error
    }

    return result
  }
}

export default returnForm