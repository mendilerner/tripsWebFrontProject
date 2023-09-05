import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'

interface Props{
  id: number
}
const TripDetail = () => {
  const {id} = useParams()
  const [show, setShowtrips] = useState('')
  return (
    <div>
    <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
            Home
            </Link>
        </nav>
        <h2>this is trip number {id}</h2>
    </div>
    
  )
}

export default TripDetail