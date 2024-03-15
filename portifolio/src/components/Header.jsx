import SwitchButton from './SwitchButton'

import '../styles/components/header.sass'

import logo from "../assets/images/logo_image.png"

function Header() {
    return (
        <>
            <header>
                <a href="#" className="logo"><img src={logo} alt="Logo Guilherme Chaves" className='logo' /></a>
                <ul className='menu'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Portifolio</a></li>
                </ul>
                <SwitchButton />
            </header>
        </>
    )
}

export default Header