import React, { useState , useContext, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { TripsContext } from './TripsContext'
import TripCard from './TripCard'

const Trips = () => {
  const context = useContext(TripsContext)
  if(!context) return null
  const {trips} = context
  return (
    <div>
    <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
            Home
            </Link>
            <Link to="/newTripForm" style={{ padding: 5 }}>
            NewTripForm
            </Link>
        </nav>
        <div  className='container'>
        {trips.map((trip) => (<Fragment key={trip.id}>
            <TripCard tripData={trip}/>
    </Fragment>))}
        </div>
    </div>
    
  )
}

export default Trips