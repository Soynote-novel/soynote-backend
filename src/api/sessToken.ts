class sessToken {
  static getToken (req: any): string {
    return req.cookies.sessToken
  }

  static setToken (res: any, token: string): void {
    res.cookie('sessToken', token, {
      httpOnly: true
    })
  }
}

export default sessToken