import React from 'react'
import NavBar from '../components/navBar/NavBar'
import { Outlet } from 'react-router'
import "./rootLayout.css"

const RootLayout = () => {
  return (
    <main>
        <NavBar/>
        <Outlet/>
    </main>
  )
}

export default RootLayout