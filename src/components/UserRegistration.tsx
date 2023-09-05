import React, {useState} from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

const UserRegistration = () => {
  const [show, setShowtrips] = useState('')
  return (
    <div>
    <button style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
            Home
            </Link>
        </button>
    </div>
    
  )
}

export default UserRegistration