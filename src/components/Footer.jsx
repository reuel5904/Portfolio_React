import React from 'react'
import Logo from '../assets/logo.png'
import '../css/footer.css'
import Resume from "../assets/Resume.pdf"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row footer__row">
                    <figure>
                        <a href="#landing-page">
                            <img src={Logo} alt="Logo" className="footer__logo--img" />
                        </a>
                    </figure>
                    <div className="footer__social--list">
                        <a href="https://github.com/reuel5904" target="_blank" rel="noreferrer" className="footer__social--link link__hover-effect link__hover-effect--white">Github</a>
                        <a href="https://www.linkedin.com/in/reuel-palanca-7b5079173/" target="_blank" rel="noreferrer"  className="footer__social--link link__hover-effect link__hover-effect--white">LinkedIn</a>
                        <a href="mailto:reuelpalancas@gmail.com" target="_blank" rel="noreferrer" className="footer__social--link link__hover-effect link__hover-effect--white">Email</a>
                        <a href={Resume} target="_blank" rel="noreferrer" className="footer__social--link link__hover-effect link__hover-effect--white">Resume</a>
                    </div>
                    <div className="footer__copyright">Copyright &copy; Reuel - 2024</div>
                </div>
            </div>
        </footer>
    )
}
