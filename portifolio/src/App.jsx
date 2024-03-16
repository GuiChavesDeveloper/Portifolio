import Header from './components/Header'
import MainContent from './components/MainContent'

import './styles/components/app.sass'

import instagram from './assets/icon/instagram_icon.png'
import linkedin from './assets/icon/linkedin_icon.png'
import github from './assets/icon/github_icon.png'
import facebook from './assets/icon/facebook_icon.png'

function App() {

  return (
    <>
      <div className="app">
        <Header />
        <div className="main">
          <h1>Guilherme Chaves</h1>
          <h2>Full Stack Develover</h2>
          <h3>Find Me Here:</h3>
          <ul>
            <li><a href="https://www.instagram.com/gs_chaves01/" target='_blank'><img src={instagram} alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/guilherme-chaves-b2a691225/" target='_blank'><img src={linkedin} alt="" /></a></li>
            <li><a href="https://github.com/GuiChavesDeveloper" target='_blank'><img src={github} alt="" /></a></li>
            <li><a href="https://www.facebook.com/guilherme.chaves.7587370/" target='_blank'><img src={facebook} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
