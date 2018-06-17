import { Router } from 'express'

const router = Router()

import * as model from '../model'
import { JWT, LoginCheck, isNotLogin, returnForm } from '../api'

router.get('/view/:id', async (req, res) => {
  const novel = await model.Episode.findById(req.params.id)

  if (novel) {
    const payload = returnForm.isSuccess(novel)

    res.status(200)
    res.jsonp(payload)
    res.end()

    return
  } else {
    const payload = returnForm.isError('episode not found')
  
    res.status(404)
    res.jsonp(payload)
    res.end()

    return
  }
})

router.get('/list/:id', async (req, res) => {
  const episodes = await model.Novel.getEpisodes(req.params.id, 1)
  const payload = returnForm.isSuccess(episodes)

  res.status(200)
  res.jsonp(payload)
  res.end()

  return
})

router.get('/list/:id/:page', async (req, res) => {
  const episodes = await model.Novel.getEpisodes(req.params.id, req.params.page)
  const payload = returnForm.isSuccess(episodes)

  res.status(200)
  res.jsonp(payload)
  res.end()

  return
})

export default router