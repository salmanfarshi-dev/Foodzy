import React from 'react'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import { Outlet } from 'react-router'
import Searchbar from '../Layouts/Searchbar'

function Rootlayout() {
  return (
   <>
   <Navbar/>
   <Searchbar/>
    <main>
      <Outlet/>
    </main>
   <Footer/>
   </>
  )
}

export default Rootlayout