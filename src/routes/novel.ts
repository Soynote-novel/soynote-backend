import { Router } from 'express'

const router = Router()

import * as model from '../model'
import { JWT, LoginCheck, isNotLogin, returnForm } from '../api'

router.get('/:id', async (req, res) => {
  const novel = await model.Novel.findById(req.params.id)

  if (novel) {
    const payload = returnForm.isSuccess(novel)

    res.status(200)
    res.jsonp(payload)
    res.end()

    return
  } else {
    const payload = returnForm.isError('novel not found')
  
    res.status(404)
    res.jsonp(payload)
    res.end()

    return
  }
})

export default router