import React from 'react'
import Project from './ui/Project'
import '../css/projects.css'

export default function Projects({ toggleModal, projects, getProjectID}) {
    return (
        <section id="projects">
            <div className="container">
                <div className="row">
                    <h1 className="section__title" style={{marginBottom: "16px"}}>My <span className="main--color">Projects</span></h1>
                    <h2 className="section__subtitle">Click the project title to <span className="main--color">learn more!</span></h2>
                    <ul className="project__list">
                        {
                            projects.map(project => (
                                <Project 
                                key={project.id}
                                toggleModal={toggleModal}
                                getProjectID={getProjectID}
                                image={project.image}
                                title={project.title} 
                                subtitle={project.subtitle}
                                id={project.id}
                                github={project.github}
                                url={project.url}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
