import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1 className='catagory-choose'>U Reckon?</h1>
      <button className='home-button'>
        <Link to="/categories"> Play </Link>
      </button>
    </>
  )
}

export default Home
