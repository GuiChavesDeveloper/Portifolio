import SwitchThemeMode from "./SwitchThemeMode"
import logo from "../../assets/images/logo_image.png"

function Header() {
    return (
        <>
            <header>
                <a href="https://google.com"><img src={logo} alt="Logo Guilherme Chaves" /></a>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Portifolio</li>
                    </ul>
                </nav>
                <SwitchThemeMode></SwitchThemeMode>
            </header>
        </>
    )
}

export default Header