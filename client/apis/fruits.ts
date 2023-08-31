import request from 'superagent'
import { Player } from '../../models/fruit'

const rootUrl = '/api/v1'

export function getAllPlayers(): Promise<Player[]> {
  return request.get(rootUrl + '/players').then((res) => {
    console.log('getAllPLayers api function', res.body)
    return res.body.players
  })
}

export function addNewPLayer() {
  return request.post(rootUrl + '/players').then((res) => {
    console.log('addNewOkayers api function', res.body)
    return res.body.players
  })
}

const apiURL = 'https://opentdb.com/api.php?amount=10&category=11'

export function getMovieQuestions() {
  return request.get(apiURL).then((res) => {
    return res.body
  })
}
