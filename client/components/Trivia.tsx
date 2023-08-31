import { useQuery } from '@tanstack/react-query'
import { getMovieQuestions } from '../apis/fruits.ts'

function Trivia() {
  const { data } = useQuery(['movie'], getMovieQuestions)
  console.log(data)

  return (
    <>
      <h1>hello</h1>
      {/* <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div> */}
    </>
  )
}

export default Trivia
