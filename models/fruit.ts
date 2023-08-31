export interface Fruit {
  id: number
  name: string
}

export interface FruitData {
  name: string
}

export interface Player {
  id: number
  name: string
  score: number
  highscore: number

export interface Categories {
  trivia_categories: Array<{ id: number; name: string }>
}

export interface Questions {
  results: Array<{
    question: string
    correct_answer: string
    incorrect_answers: string[]
  }>
}
