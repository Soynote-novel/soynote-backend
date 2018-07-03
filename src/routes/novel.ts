import { Router } from 'express'

const router = Router()

import * as model from '../model'
import { JWT, LoginCheck, isNotLogin, returnForm } from '../api'

router.get('/view/:id', async (req, res) => {
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

router.get('/list', async (req, res) => {
  const novels = await model.Novel.getNovels(1)

  const payload = returnForm.isSuccess(novels)

  res.status(200)
  res.jsonp(payload)
  res.end()

  return
})

router.get('/list/:page', async (req, res) => {
  const novels = await model.Novel.getNovels(req.params.page)

  const payload = returnForm.isSuccess(novels)

  res.status(200)
  res.jsonp(payload)
  res.end()

  return
})

router.get('/amount', async (req, res) => {
  const novels = await model.Novel.getAmount()
  const payload = returnForm.isSuccess(novels)

  res.status(200)
  res.jsonp(payload)
  res.end()

  return
})

export default router