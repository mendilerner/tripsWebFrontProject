import React, {useState} from 'react'
import { Link ,BrowserRouter as Router } from 'react-router-dom'


const Home = () => {
  const [show, setShowtrips] = useState('')
  return (
    <div>
    <nav style={{ margin: 10 }}>
            <Link to="/trips" style={{ padding: 5 }}>
            Trips
            </Link>
            <Link to="/sighn-hp" style={{ padding: 5 }}>
            register
            </Link>
        </nav>
        <div className='containerBox'>
          <div className='welcome'>
          <h1>
              trips manager
          </h1>
          <Link to="/login" style={{ padding: 5 }}>
            login
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Home