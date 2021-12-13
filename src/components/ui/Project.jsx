import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Project({ toggleModal, image, title, subtitle, id, getProjectID, github, url}) {
    function twoFunctions(event) {
        getProjectID(event)
        toggleModal();
    }

    return (
        <li className="project">
            <div className="project__wrapper">
                <img src={image} alt="Project" className="project__img" />
                <div className="project__wrapper--bg"></div>
                <div className="project__description">
                    <a href="#landing-page" className="project__link" onClick={(event) => twoFunctions(event.target.id)}>
                        <h3 className="project__description--title" id={id}>{title}</h3>
                    </a>
                    <h4 className="project__description--sub-title">{subtitle}</h4>
                    <div className="project__description--links">
                        <a href={github} rel="noreferrer" target="_blank" className="project__description--link">
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a href={url} rel="noreferrer" target="_blank" className="project__description--link">
                            <FontAwesomeIcon icon="link" />
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}
