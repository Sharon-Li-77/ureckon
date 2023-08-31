import { useQuery } from '@tanstack/react-query'
import { fetchQuestions } from '../apis/fruits.js'
import { useParams } from 'react-router-dom'
import he from 'he'

function Trivia() {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ['questions'],
    queryFn: () => fetchQuestions(Number(id)),
  })
  console.log(data)

  return (
    <>
      <div className="app">
        <h1> Guess a movie name </h1>
        <ul>
          {data &&
            data.results.map((p, index) => (
              <li key={index}>{he.decode(p.question)}</li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Trivia
