import React, {useState} from 'react'
import { Link ,BrowserRouter as Router } from 'react-router-dom'
import Trips from './Trips'
import UserLogin from './UserLogin'
import UserRegistration from './UserRegistration'
import MyRouter from './MyRouter'

const Home = () => {
  const [show, setShowtrips] = useState('')
  return (
    <div>
      {/* {show === "" && <div>
    <button onClick={() => {setShowtrips('Trips')}}>all trips</button>
    <button onClick={() => {setShowtrips('UserLogin')}}>Login</button>
    <button onClick={() => {setShowtrips('UserRegistration')}}>sign-hp</button>
    <div>Home</div>
    </div>}
    {show === 'Trips' && <Trips/>}
    {show === 'UserLogin' && <UserLogin/>}
    {show === 'UserRegistration' && <UserRegistration/>} */}
    <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
            Home
            </Link>
            <Link to="/trips" style={{ padding: 5 }}>
            Trips
            </Link>
            <Link to="/login" style={{ padding: 5 }}>
            Login
            </Link>
            <Link to="/sighn-hp" style={{ padding: 5 }}>
            Sighn-hp
            </Link>
        </nav>
    </div>
  )
}

export default Home