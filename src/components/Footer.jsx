import React from 'react'
import Logo from '../assets/logo.png'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row footer__row">
                    <figure>
                        <img src={Logo} alt="Logo" className="footer__logo--img" />
                    </figure>
                    <div className="footer__social--list">
                        <a href="/" className="footer__social--link link__hover-effect link__hover-effect--white">Github</a>
                        <a href="/" className="footer__social--link link__hover-effect link__hover-effect--white">LinekdIn</a>
                        <a href="/" className="footer__social--link link__hover-effect link__hover-effect--white">Email</a>
                        <a href="/" className="footer__social--link link__hover-effect link__hover-effect--white">Resume</a>
                    </div>
                    <div className="footer__copyright">Copyright &copy; Reuel - 2021</div>
                </div>
            </div>
        </footer>
    )
}
