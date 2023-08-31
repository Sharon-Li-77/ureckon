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

export default router
