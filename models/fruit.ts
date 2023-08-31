export interface Fruit {
  id: number
  name: string
}

export interface FruitData {
  name: string
}

export interface Categories {
  trivia_categories: Array<{ id: number; name: string }>
}

export interface Questions {
  results: Array<{ question: string }>
}
