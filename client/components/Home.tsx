import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1 className="catagory-choose">U Reckon?</h1>
      <button className="home-button">
        <Link to="/categories"> Play </Link>
      </button>
      <Link className="turn-text" to="/players">
        {' '}
        Add Players{' '}
      </Link>
    </>
  )
}

export default Home
