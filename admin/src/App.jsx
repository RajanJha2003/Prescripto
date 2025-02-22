import React from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className=''>
      <Login />
      <ToastContainer />
    </div>
  )
}

export default App