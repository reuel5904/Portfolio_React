import React from 'react'
import Nav from './ui/Nav'
import Logo from '../assets/logo.png'
import Header from './ui/Header'
import LandingExtra from './ui/LandingExtra'
import Resume from "../assets/Resume.pdf"
import '../css/landing.css'
import '../css/nav.css'

export default function Landing({projectId, projectsInfo }) {
    const scaleFactor = 1 / 20
    
    function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}
    return (
        <section id="landing-page" onMouseMove={(event) => moveBackground(event)}>
            <Nav Logo={Logo}/>
            <Header Resume={Resume}/>
            <LandingExtra projectId={projectId} projectsInfo={projectsInfo}/>
        </section>
    )
}
