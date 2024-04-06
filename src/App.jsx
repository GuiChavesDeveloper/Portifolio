import React, { useState } from 'react'

import Header from './components/Header'
import MainContent from './components/MainContent'

import './styles/components/app.sass'



function App() {

  const [temaEscuro, setTemaEscuro] = useState(false)

  return (
    <>
      <div className={`app ${temaEscuro ? 'dark' : 'light'}`}>
        <Header setTemaEscuro={setTemaEscuro} />
        <MainContent />
      </div>
    </>
  )
}

export default App
