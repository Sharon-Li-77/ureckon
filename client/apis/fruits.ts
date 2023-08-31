import request from 'superagent'
import type { Categories, Questions } from '../../models/fruit'

const rootUrl = '/api/v1'

export function getFruits(): Promise<string[]> {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.fruits
  })
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
