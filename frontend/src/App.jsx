import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet, useLocation } from 'react-router'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'


const App = () => {
  const { pathname } = useLocation();
  const hiddenNav = pathname.includes("/dashboard");

  const { userInfo } = useSelector(state => state.auth);



  return (
    <>
      {userInfo && !hiddenNav && <Navbar />}
      <main><Outlet /></main>
      <Toaster position='top-center' />
    </>
  )
}

export default App