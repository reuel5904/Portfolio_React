import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Header({ Resume }) {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="title">Hey,</h1>
                <h1 className="title title--secondary">I'm Reuel</h1>
                <p className="header__para"><span className="highlighted-text title-position">Frontend Software Engineer</span></p>
                <div className="social__list">
                    <a href="https://www.linkedin.com/in/reuel-palanca-7b5079173/" target="_blank" rel="noreferrer" className="social__link click">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    </a>
                    <a href="https://github.com/reuel5904" target="_blank" rel="noreferrer" className="social__link click">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <a href={Resume} target="_blank" rel="noreferrer" className="social__link click">
                        <FontAwesomeIcon icon="file-pdf" />
                    </a>
                </div>
            </div>
        </header>
    )
}
