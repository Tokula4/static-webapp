import React from 'react'
import Landing from './Landing'
import Navbar from './Navbar'

function Layout() {
  return (
    <div   className=" bg-[url(/img-10.jpg)]  bg-cover" >
      <Navbar/>
      <Landing/>
    </div>
  )
}

export default Layout
