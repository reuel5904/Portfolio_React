import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Modal({projectsInfo, projectInfoID }) {
    function closeModal() {
        return document.body.classList.remove("modal--open")
    }
    return (
        <div className="modal" id="modal">
            <div className="modal__half modal__about">
                <h3 className="modal__title modal__-title--about" id="modal-title">{projectsInfo[projectInfoID].title}</h3>
                <h4 className="modal__sub-title modal__sub-title--about" id="modal-subtitle">{projectsInfo[projectInfoID].subtitle}</h4>
                <p className="modal__para" id="modal-para">{projectsInfo[projectInfoID].paragraph}</p>
                <div className="project__description--links">
                    <a href={projectsInfo[projectInfoID].github} rel="noreferrer" target="_blank" className="project__description--link">
                        <FontAwesomeIcon icon={['fab', 'github']} style={{color: "#242424"}} />
                    </a>
                    <a href={projectsInfo[projectInfoID].url} rel="noreferrer" target="_blank" className="project__description--link">
                        <FontAwesomeIcon icon="link" style={{color: "#242424"}} />
                    </a>
                </div>
            </div>
            <div className="modal__half modal__contact" id="modal__img" style={{ backgroundImage: `url(${projectsInfo[projectInfoID].image})`}}>
                <FontAwesomeIcon icon="times" className="modal__exit click" style={{fontSize: "36px", color: "#000"}} onClick={closeModal}/>
            </div>
        </div>
    )
}
