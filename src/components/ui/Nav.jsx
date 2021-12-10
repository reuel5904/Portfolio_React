import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav({ Logo }) {
    let contrastToggle = false;

    function toggleContrast() {
        contrastToggle = !contrastToggle;
        contrastToggle ? document.body.classList += " dark-theme" : document.body.classList.remove("dark-theme")
    }

    return (
        <nav>
            <figure>
                <img src={Logo} alt="Logo" className="personal-logo" />
            </figure>
            <ul className="nav__link--list">
                <li className="nav__link">
                    <a href="#about__me" className="nav__link--anchor link__hover-effect link__hover-effect--black">About</a>
                </li>
                <li className="nav__link">
                    <a href="#projects" className="nav__link--anchor link__hover-effect link__hover-effect--black">Projects</a>
                </li>
                <li className="nav__link">
                    <a href="#contact__me" className="nav__link--anchor link__hover-effect link__hover-effect--black">Contact</a>
                </li>
                <li className="nav__link click" onClick={toggleContrast}>
                    <a href="#landing-page" className="nav__link--anchor link__hover-effect link__hover-effect--black"><FontAwesomeIcon icon="adjust"/></a>
                </li>
            </ul>
        </nav>
    )
}
