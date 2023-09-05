import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Trips = () => {
  const [show, setShowtrips] = useState('')
  return (
    <div>
    <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
            Home
            </Link>
            <Link to="/newTripForm" style={{ padding: 5 }}>
            NewTripForm
            </Link>
            <Link to="/updateTripForm" style={{ padding: 5 }}>
            UpdateTripForm
            </Link>
        </nav>
        <div style={{ padding: 5 }}>
        {[1,2,3].map((e,i) => (<div key={i}>
          <Link to={`/trips/${e}`} style={{ padding: 5 }}>
            {e}
            </Link>
    </div>))}
        </div>
    </div>
    
  )
}

export default Trips