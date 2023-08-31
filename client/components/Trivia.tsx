import { useQuery } from '@tanstack/react-query'
import { fetchQuestions } from '../apis/fruits.js'
import { useParams } from 'react-router-dom'

function Trivia() {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ['questions'],
    queryFn: () => fetchQuestions(Number(id)),
  })
  console.log(data)

  return (
    <>
      <h1>Trivia</h1>
      {/* <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div> */}
    </>
  )
}

export default Trivia
