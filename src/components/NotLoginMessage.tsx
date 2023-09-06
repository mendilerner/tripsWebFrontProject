import React from 'react'
import { useNavigate } from 'react-router-dom'

const notLoginMessage = () => {
    const Navigate = useNavigate()
  return (
    <div>
        <button onClick={() => Navigate('/')}>home</button>
    <div className='containerBox'>
        <div className='message'>
            <h2>you are not logged in</h2>
            <p>please login</p>
            <button onClick={() => Navigate('/login')}>pass to login</button>
        </div>
    </div>
    </div>
  )
}

export default notLoginMessage