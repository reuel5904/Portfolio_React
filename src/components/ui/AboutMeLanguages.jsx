import React from 'react'

export default function AboutMeLanguages({ image, alt, name}) {
    return (
        <>
            <figure className="about__me--language">
                <img src={image} alt={alt} className="about__me--language--img" />
                <span className="language__name">{name}</span>
            </figure>
        </>
    )
}
