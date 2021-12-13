import React from 'react'
import AboutMeLanguages from './AboutMeLanguages'

export default function AboutMePanel({ title, description, image, languages, id}) {
    function Technologies(props) {
        let techID = props.techID
        if (techID === 2) {
            return (
                <div className="about__me--languages">
                    {
                        languages.map(language => (
                            <AboutMeLanguages key={language.id} image={language.image} alt={language.alt} name={language.name}/>
                        ))
                    }
                </div>
            )
        } return null;
    }
    
    return (
        <div className="about__me--panel">
            <figure className="css__avatar">
                <img src={image} alt="CSS Avatar" className="css__avatar--img" />
            </figure>
            <div className="about__me--text">
                <h2 className="about__me-header">{title}</h2>
                <p className="about__me-para">{description}</p>
            </div>
            <Technologies techID={id} />
        </div>
    )
}
