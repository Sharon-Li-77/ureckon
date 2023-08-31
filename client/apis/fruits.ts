import request from 'superagent'
import { Player } from '../../models/fruit'

const rootUrl = '/api/v1/players'

export async function getAllPlayers(): Promise<Player[]> {
  const response = await request.get(rootUrl)
  return response.body as Player[]
}

export async function addNewPLayer(playerName: string): Promise<void> {
  await request.post(rootUrl).send(playerName)
}

const apiURL = 'https://opentdb.com/api.php?amount=10&category=11'

export function getMovieQuestions() {
  return request.get(apiURL).then((res) => {
    return res.body
  })
}
