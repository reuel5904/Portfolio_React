import React from 'react'
import Nav from './ui/Nav'
import Logo from '../assets/logo.png'
import Header from './ui/Header'
import LandingExtra from './ui/LandingExtra'

export default function Landing({ toggleModal, projectId, projectsInfo }) {
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
            <Header />
            <LandingExtra toggleModal={toggleModal} projectId={projectId} projectsInfo={projectsInfo}/>
        </section>
    )
}
