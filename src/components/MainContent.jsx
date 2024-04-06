import React, { useState } from 'react'
import instagram_icon from '../assets/icon/instagram_icon.png'
import linkedin_icon from '../assets/icon/linkedin_icon.png'
import github_icon from '../assets/icon/github_icon.png'
import facebook_icon from '../assets/icon/facebook_icon.png'
import self from '../assets/images/self_img.jpg'
import html5_icon from '../assets/icon/html5_icon.png'
import css3_icon from '../assets/icon/css3_icon.png'
import react_icon from '../assets/icon/react_icon.png'
import js_icon from '../assets/icon/javascript_icon.png'

import '../styles/components/maincontent.sass'

function MainContent() {
    return (
        <>
            <section className="main">
                <h1>Guilherme Chaves</h1>
                <h2>Full Stack Develover</h2>
                <h3>Find Me Here:</h3>
                <ul>
                    <li><a href="https://www.instagram.com/gs_chaves01/" target='_blank'><img src={instagram_icon} alt="Instagram Icon" /></a></li>
                    <li><a href="https://www.linkedin.com/in/guilherme-chaves-b2a691225/" target='_blank'><img src={linkedin_icon} alt="Linkedin Icon" /></a></li>
                    <li><a href="https://github.com/GuiChavesDeveloper" target='_blank'><img src={github_icon} alt="GitHub Icon" /></a></li>
                    <li><a href="https://www.facebook.com/guilherme.chaves.7587370/" target='_blank'><img src={facebook_icon} alt="Facebook Icon" /></a></li>
                </ul>
            </section>
            <section className='aboutMe'>
                <div className='div-img'>
                    <img className='self-img' src={self} alt="Guilherme Chaves" />
                </div>
                <div className='div-content'>
                    <h1 className='title'>About Me</h1>
                    <div className="content">
                        <p>Hello!<br />My name is Guilherme Chaves and I am a Full Stack developer.
                            <br />Here are some of the technologies I work with:</p>
                    </div>
                    <ul className='tec-icons'>
                        <li><img src={html5_icon} alt="HTML 5 Icon" /></li>
                        <li><img src={css3_icon} alt="CSS 3 Icon" /></li>
                        <li><img src={react_icon} alt="React Icon" /></li>
                        <li><img src={js_icon} alt="JavaScript Icon" /></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MainContent