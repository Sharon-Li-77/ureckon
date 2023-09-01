import { useQuery } from '@tanstack/react-query'
import { fetchCategory } from '../apis/fruits'
import { Link } from 'react-router-dom'

function Categories() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategory(),
  })
  console.log(data)
  return (
    <>
      <div>
        <h2 className="catagory-choose">Choose a Category</h2>
        <button>
          <Link to="/">Back </Link>
        </button>
        <p>{isLoading ? 'data is loading...' : ''}</p>
        <p>{isError ? 'something went wrong' : ''}</p>
        <ul className="catagory">
          {data &&
            data.trivia_categories.map((c) => (
              <li key={c.id}>
                <Link to={`${c.id}`}>
                  <button className="catagory-link">{c.name}</button>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Categories
