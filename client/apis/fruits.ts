import request from 'superagent'
import type { Categories } from '../../models/fruit'

const rootUrl = '/api/v1'

export function getFruits(): Promise<string[]> {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.fruits
  })
}

const categoryAPIUrl = 'https://opentdb.com/api_category.php'

export async function fetchCategory(): Promise<Categories> {
  const response = await request.get(categoryAPIUrl)
  return response.body
}

const apiUrl = `https://opentdb.com/api.php?amount=10&category=10`

export function getMovieQuestions() {
  return request.get(apiUrl).then((res) => {
    return res.body
  })
}
