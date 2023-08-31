import request from 'superagent'
import type { Categories, Questions, Player } from '../../models/fruit'

const rootUrl = '/api/v1/players'

export async function getAllPlayers(): Promise<Player[]> {
  const response = await request.get(rootUrl)
  return response.body as Player[]
}

export async function getPlayer(id: number): Promise<Player> {
  const response = await request.get(`${rootUrl}/${id}`)
  return response.body as Player
}

export async function getPlayerScore(id: number): Promise<number> {
  const response = await request.get(`${rootUrl}/score/${id}`)
  return response.body as number
}

export async function updateScoreforPlayer(
  id: number,
  score: number,
): Promise<void> {
  await request.patch(`${rootUrl}/score/${id}`).send({ score })
}

export async function addNewPLayer(playerName: string): Promise<void> {
  await request.post(rootUrl).send({ name: playerName })
}

const categoryApiUrl = 'https://opentdb.com/api_category.php'

export async function fetchCategory(): Promise<Categories> {
  const response = await request.get(categoryApiUrl)
  return response.body
}

const triviaApiUrl = 'https://opentdb.com/api.php?amount=1&category='

export async function fetchQuestions(id: number): Promise<Questions> {
  const response = await request.get(`${triviaApiUrl}${id}`)
  return response.body
}

const apiUrl = 'https://opentdb.com/api.php?amount=10&category=10'

export function getMovieQuestions() {
  return request.get(apiUrl).then((res) => {
    return res.body
  })
}
