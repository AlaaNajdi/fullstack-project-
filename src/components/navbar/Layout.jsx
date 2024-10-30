import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div>
      <div>
        <header>
          <NavBar />
        </header>
        <main><Outlet /></main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
