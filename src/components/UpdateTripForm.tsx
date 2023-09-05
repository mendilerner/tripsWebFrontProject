import React, {useState} from 'react'
import Trips from './Trips'
import { tTrip } from './interfaces'
import { Link } from 'react-router-dom'

const UpdateTripForm = ({name}: {name: string}) => {
  const [show, setShowtrips] = useState('')
  return (
    <div>
    <button style={{ margin: 10 }}>
            <Link to="/trips" style={{ padding: 5 }}>
            trips
            </Link>
        </button>
    </div>
    
  )
}

export default UpdateTripForm