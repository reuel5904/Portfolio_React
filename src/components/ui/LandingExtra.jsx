import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function LandingExtra({ toggleModal, projectId, projectsInfo }) {
    const projectInfoID = projectId - 1

    return (
        <>
            <button className="mail__btn click">
                <a href="#contact__me">
                    <FontAwesomeIcon icon="envelope" className="mail"/>
                </a>
            </button>
            <a href="#projects" className="scroll">
                <div className="scroll__icon click"></div>
            </a>

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
                    <FontAwesomeIcon icon="times" onClick={toggleModal} className="modal__exit click" style={{fontSize: "36px", color: "#000"}}/>
                </div>
            </div>

            <div className="shapes">
                <img src="https://i.imgur.com/eO3YgR7.png" className="shape shape--0" />
                <img src="https://i.imgur.com/eukJCU0.png" className="shape shape--1" />
                <img src="https://i.imgur.com/66r0euN.png" className="shape shape--2" />
                <img src="https://i.imgur.com/eukJCU0.png" className="shape shape--3" />
                <img src="https://i.imgur.com/aGMOSi0.png" className="shape shape--4" />
                <img src="https://i.imgur.com/eO3YgR7.png" className="shape shape--5" />
                <img src="https://i.imgur.com/eO3YgR7.png" className="shape shape--6" />
                <img src="https://i.imgur.com/66r0euN.png" className="shape shape--7" />
                <img src="https://i.imgur.com/aGMOSi0.png" className="shape shape--8" />
            </div>
        </>
    )
}
