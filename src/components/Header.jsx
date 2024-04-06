import React, { useState } from 'react'
import SwitchButton from './SwitchButton'
import '../styles/components/header.sass'
import logo from "../assets/images/logo_image.png"
import { Link } from 'react-router-dom'

function Header() {

    const [temaEscuro, setTemaEscuro] = useState(false)

    const scrollToHome = () => {
        const mainSection = innerHeight(0)
        mainSection.scrollIntoView({ behavior: "smooth" })
    }

    const scrollToAboutMe = () => {
        const aboutMeSection = document.querySelector(".aboutMe");
        aboutMeSection.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <header className={`header ${temaEscuro ? 'dark' : 'light'}`}>
                <a href="#" className="logo"><img src={logo} alt="Logo Guilherme Chaves" className='logo' /></a>
                <ul className={`menu ${temaEscuro ? 'dark' : 'light'}`}>
                    <li><Link to={"/Portifolio"} onClick={scrollToHome}>Home</Link></li>
                    <li><Link to={"/Portifolio"} onClick={scrollToAboutMe}>About Me</Link></li>
                    <li><Link to={"/Portifolio/gitprojects"}>Portifolio</Link></li>
                </ul>
                <SwitchButton setTemaEscuro={setTemaEscuro} />
            </header>
        </>
    )
}

export default Header