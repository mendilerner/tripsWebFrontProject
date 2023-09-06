import React , {Fragment, useContext} from 'react'
import { tTrip } from './interfaces'
import { Link, useNavigate} from 'react-router-dom'
import { deleteTrip, getToken } from './Services'
import { TripsContext } from './TripsContext'
const TripCard = ({tripData: {id, name, image, destination}}: {tripData :tTrip}) => {
  const context = useContext(TripsContext)
  if(!context) return null
  const {trips, setTrips} = context
  const navigate = useNavigate()
  const handleDelete = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation()
      const token = getToken()
      if (!token){
         return navigate('/NotLoginMessage')
      }
      
      let conf = confirm('do you want to delete this trip')
      if (conf) {
      const deletedTrip = await deleteTrip(id, token as string)
      if (deletedTrip === 401){
        return navigate('/NotLoginMessage')
      }

      if(deletedTrip){
        const updatedTrips = trips.filter((trip) => trip.id !== id)
        console.log(updatedTrips);
        setTrips(updatedTrips)
      }
      console.log(deletedTrip)
      } 
      
  }
  return (
    <div className='trip-card' onClick={()=> navigate(`/trips/${id}`)}>
            <img src={image} alt={name} /> 
            <h2>{name}</h2>
            <p>{destination}</p>
            <button onClick={handleDelete}>delete</button>
    </div>
    
  )
}

export default TripCard