import React from 'react'
import Avatar from '../assets/css_avatar.png'
import CodeImg from '../assets/code-flat.png'
import GameImg from '../assets/games-console-icon-2.jpg'

export default function AboutMe() {
    return (
        <section id="about__me">
            <div className="container after__quote">
                <div className="row">
                    <h1 className="section__title">Who am I?</h1>
                    <div className="about__me--wrapper">
                        <div className="about__me--panel">
                            <figure className="css__avatar">
                                <img src={Avatar} alt="CSS Avatar" className="css__avatar--img" />
                            </figure>
                            <div className="about__me--text">
                                <h2 className="about__me-header">About Me</h2>
                                <p className="about__me-para">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae impedit eligendi aliquid officia vel cupiditate quis praesentium consequatur temporibus doloribus! Repudiandae, placeat. Deleniti est itaque quos vero voluptatem tempora voluptatibus! <span className="highlighted-text">Viva la vida!</span>.
                                </p>
                            </div>
                        </div>
                        <div className="about__me--panel">
                            <figure className="css__avatar">
                                <img src={CodeImg} alt="Code Icon" className="css__avatar--img" />
                            </figure>
                            <div className="about__me--text">
                                <h2 className="about__me-header">Skills</h2>
                                <p className="about__me-para">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae impedit eligendi aliquid officia vel cupiditate quis praesentium consequatur temporibus doloribus! Repudiandae, placeat. Deleniti est itaque quos vero voluptatem tempora voluptatibus! <span className="highlighted-text">Viva la vida!</span>.
                                </p>
                            </div>
                            <div className="about__me--languages">
                                <figure className="about__me--language">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" alt="HTML" className="about__me--language--img" />
                                    <span className="language__name">HTML</span>
                                </figure>
                                <figure className="about__me--language">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" alt="CSS" className="about__me--language--img" />
                                    <span className="language__name">CSS</span>
                                </figure>
                                <figure className="about__me--language">
                                    <img src="https://i.imgur.com/wuSSXhE.png" alt="Javascript" className="about__me--language--img" />
                                    <span className="language__name">Javascript</span>
                                </figure>
                                <figure className="about__me--language">
                                    <img src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png" alt="React" className="about__me--language--img" />
                                    <span className="language__name">React</span>
                                </figure>
                                <figure className="about__me--language">
                                    <img src="https://i.imgur.com/nrE8mFL.png" alt="Python" className="about__me--language--img" />
                                    <span className="language__name">Python</span>
                                </figure>
                                <figure className="about__me--language">
                                    <img src="https://i.imgur.com/Jmh67Yp.png" alt="Git" className="about__me--language--img" />
                                    <span className="language__name">Git</span>
                                </figure>
                            </div>
                        </div>
                        <div className="about__me--panel">
                            <figure className="css__avatar">
                                <img src={GameImg} alt="GameImg" className="css__avatar--img" />
                            </figure>
                            <div className="about__me--text">
                                <h2 className="about__me-header">Interests</h2>
                                <p className="about__me-para">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae impedit eligendi aliquid officia vel cupiditate quis praesentium consequatur temporibus doloribus! Repudiandae, placeat. Deleniti est itaque quos vero voluptatem tempora voluptatibus! <span className="highlighted-text">Viva la vida!</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
