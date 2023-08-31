import { Router } from 'express'

import * as db from '../db/players.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const data = await db.getAllPLayers()

    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  const name = req.body.name
  try {
    const data = await db.addNewPlayer(name)

    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/score/:id', async (req, res) => {
  const id = Number(req.params.id)
  const score = req.body.score
  try {
    const data = await db.updatePlayerScore(id, score)

    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await db.getAllPLayers()

    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
