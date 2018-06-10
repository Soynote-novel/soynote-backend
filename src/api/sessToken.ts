export let getToken = (req: any) => {
  return req.cookies.sessToken
}

export let setToken = (res: any, token: string) => {
  res.cookie('sessToken', token, {
    httpOnly: true
  })
}