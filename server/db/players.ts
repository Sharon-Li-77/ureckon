import connection from './connection.js'
import { Fruit } from '../../models/fruit.js'

const db = connection
export async function getAllPLayers(db = connection): Promise<Fruit[]> {
  return db('players').select()
}

export async function addNewPlayer(newUser: string) {
  return db('players').insert({ name: newUser })
}

export function getPlayer(id: number) {
  return db('players').where('id', id).select()
}

export async function updatePlayerScore(id: number, score: number) {
  const currentScore = await db('players').where('id', id).pluck('score')
  console.log(currentScore)
  const newScore = Number(currentScore) + score
  return db('players').where('id', id).update({ score: newScore })
}
