import React, {useState} from 'react'
import Home from './Home'
import {Link} from 'react-router-dom'

const UserLogin = () => {
  const [show, setShowtrips] = useState('')
  return (
    <div>
    <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
            Home
            </Link>
        </nav>

    </div>
    
  )
}

export default UserLogin