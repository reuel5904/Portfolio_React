import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Modal from './Modal'
import Shapes from './Shapes'

export default function LandingExtra({projectId, projectsInfo }) {
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
            <Modal projectsInfo={projectsInfo} projectInfoID={projectInfoID}/>
            <Shapes />
        </>
    )
}
