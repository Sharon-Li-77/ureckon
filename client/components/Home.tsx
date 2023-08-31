import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>U Reckon?</h1>
      <button>
        <Link to="/categories"> Categories </Link>
      </button>
    </>
  )
}

export default Home
