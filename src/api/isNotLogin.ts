import { Request, Response, NextFunction } from 'express'

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  if (req.get('authorization')) {
    const payload = { valid: false, status: 'Already Login' }
    res.status(400)
    res.json(payload)
    res.end()
    return
  }
  next()
}
