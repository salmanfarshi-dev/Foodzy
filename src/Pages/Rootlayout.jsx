import React from 'react'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import { Outlet } from 'react-router'

function Rootlayout() {
  return (
   <>
   <Navbar/>
    <main>
      <Outlet/>
    </main>
   <Footer/>
   </>
  )
}

export default Rootlayout