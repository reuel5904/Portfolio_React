import React from 'react'
import AboutMeData from "../data/aboutMe.json"
import Languages from "../data/aboutMeLanguages.json"
import AboutMePanel from './ui/AboutMePanel'
import '../css/aboutme.css'

export default function AboutMe() {

    return (
        <section id="about__me">
            <div className="container after__quote">
                <div className="row">
                    <h1 className="section__title">Who am I?</h1>
                    <div className="about__me--wrapper">
                    {
                        AboutMeData.map(panel => (
                            <AboutMePanel 
                            key={panel.id}
                            id={panel.id}
                            title={panel.title}
                            description={panel.description}
                            image={panel.image}
                            languages={Languages}
                            />
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}
