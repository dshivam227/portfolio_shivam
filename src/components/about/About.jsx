import React from 'react';
import './About.css';
// import Image from '../../assets/avatar-2.svg';
import Image from '../../assets/toon.jpg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Shivam Dubey, and I'm based in Gorakhpur,Uttar Pradesh. I am currently studying at Madan Mohan Malaviya University of technology, where I am pursuing B.Tech in Information Technology.<br /><br />
                            Fastforward to today,My current focus these days is on expanding my portfolio by building more projects that I can add on here, as well as being a great team player.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            {/* <li>TypeScript</li> */}
                            <li>React</li>
                            <li>Node.js</li>
                            <li>SQL</li>
                            {/* <li>NestJS</li> */}
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>
                    <br />
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Competitive Programming</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About