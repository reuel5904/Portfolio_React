import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="title">Hey,</h1>
                <h1 className="title title--secondary">I'm Reuel</h1>
                <p className="header__para"><span className="highlighted-text title-position">Frontend Developer</span></p>
                <div className="social__list">
                    <a href="/" className="social__link click">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    </a>
                    <a href="/" className="social__link click">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <a href="/" className="social__link click">
                        <FontAwesomeIcon icon="file-pdf" />
                    </a>
                </div>
            </div>
        </header>
    )
}
