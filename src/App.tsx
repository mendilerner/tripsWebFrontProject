import { useState } from 'react'
import TripsContextProvider from './components/TripsContext'
import './styles.css'
import MyRouter from './components/MyRouter'

function App() {
  return (
    <>
      <TripsContextProvider>
      <MyRouter/>
      </TripsContextProvider>
    </>
  )
}

export default App
