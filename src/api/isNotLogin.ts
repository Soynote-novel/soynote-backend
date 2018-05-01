export default async (req: any, res: any, next: any): Promise<void> => {
  if (req.headers && req.headers.authorization) {
    const payload = { valid: false, status: 'Already Login' }
    res.status(400)
    res.json(payload)
    res.end()
    return
  }
  next()
}
