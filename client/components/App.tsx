import { useQuery } from '@tanstack/react-query'
import { useFruits } from '../hooks/useFruits.ts'
import { getMovieQuestions } from '../apis/fruits.ts'

function App() {
  const { data } = useQuery(['movie'], getMovieQuestions)
  console.log(data)

  return (
    <>
      {/* <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div> */}
    </>
  )
}

export default App
