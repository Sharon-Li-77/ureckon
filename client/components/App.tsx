import { useQuery } from '@tanstack/react-query'
import { useFruits } from '../hooks/useFruits.ts'
import { getMovieQuestions } from '../apis/fruits.ts'
import he from 'he'

function App() {
  const { data } = useQuery(['movie'], getMovieQuestions)

  return (
    <>
      <div className="app">
        <h1> Guess a movie name </h1>
        <ul>
          {data &&
            data.map((p) => (
              <li key={data.indexOf(p)}>{he.decode(p.question)}</li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default App
