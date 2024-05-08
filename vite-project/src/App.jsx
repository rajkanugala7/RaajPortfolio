import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Projects'


import Navbar from './components/Navbar'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element:<Home/>
  },
    {
      path: "/about",
      element:<About/>
    },
    {
      path: "/Projects",
      element:<Projects/>
    },
    {
      path: "/Education",
      element:<Education/>
    }
  ])
  return (
    <>
      <Navbar/>
      <RouterProvider router={router} /> 
      
    </>

  )
}

export default App
