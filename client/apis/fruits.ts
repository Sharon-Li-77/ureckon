import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits(): Promise<string[]> {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.fruits
  })
}

const apiURL = 'https://opentdb.com/api.php?amount=1&category=11'

export function getMovieQuestions() {
  return request.get(apiURL).then((res) => {
    return res.body.results as []
  })
}
