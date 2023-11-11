import { useState, useEffect } from 'react'
import TripsContextProvider from './components/TripsContext'
import './styles.css'
import MyRouter from './components/MyRouter'
import Modal from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const clearTokenLocalStorage = () => {
    localStorage.removeItem('token-key');
  }
  useEffect(() => {
    window.addEventListener('beforeunload', clearTokenLocalStorage);
    return () => {
      window.removeEventListener('beforeunload', clearTokenLocalStorage);
    }
  }, [])
  return (
    <>
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} >
        <h2>This is a modal</h2>
        <p>Modal content goes here.</p>
      </Modal>
    </div>
      <TripsContextProvider>
      <MyRouter/>
      </TripsContextProvider>
    </>
  )
}

export default App
