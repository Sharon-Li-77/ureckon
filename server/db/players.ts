import connection from './connection.js'
import { Fruit } from '../../models/fruit.js'

const db = connection
export async function getAllPLayers(db = connection): Promise<Fruit[]> {
  return db('players').select()
}

export async function addNewUser(newUser: string) {
  return db('players').insert({ name: newUser })
}
