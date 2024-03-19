import React from 'react'

import Header from './components/Header'
import MainContent from './components/MainContent'

import './styles/components/app.sass'
import { Outlet } from 'react-router-dom'



function App() {
  return (
    <>
      <div className="app">
        <Header />
        <MainContent />
      </div>
    </>
  )
}

export default App
