import { Router } from 'express'

import * as db from '../db/players.ts'

const router = Router()

// get all players
router.get('/', async (req, res) => {
  try {
    const data = await db.getAllPLayers()

    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

//add a player
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

//get a players score by id
router.get('/score/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const data = await db.getPlayerScore(id)
    res.json(data.score)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

//update a players score
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

//get a specific players score
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const data = await db.getPlayer(id)

    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
