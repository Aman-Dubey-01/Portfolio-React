
import './Tours.scss';
import { FaReact, FaNodeJs, FaSass, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiRedux, SiTailwindcss, SiGreensock } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';



function Tours() {
    return (
        <>
            <section className="section-tours" id="section-tours">
                <h2 className="heading-secondary">
                    Ready for Job Positions
                </h2>
                <h3>Hire Me</h3>

                <div className="row">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">Front-end <br /> <small>Developer</small> </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li><FaSass /> &nbsp;Sass / CSS&nbsp;<FaCss3Alt /></li>
                                    <li><FaReact /> &nbsp;React JS</li>
                                    <li><SiTailwindcss /> &nbsp;Taiwind / Bootstrap&nbsp;<FaBootstrap /></li>
                                    <li><SiGreensock /> &nbsp;GSAP Animation</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Elevate Your User Interface with My Frontend Expertise. Let's Make Your Vision a Reality </p>
                                </div>
                                <a href="#contact" className="btn btn--white">Hire Me</a>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--2">MERN Stack <br /> <small>Developer</small></span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li><SiMongodb /> MongoDB</li>
                                    <li><SiExpress />&nbsp; Express JS</li>
                                    <li><FaReact /> &nbsp; React JS</li>
                                    <li><FaNodeJs />&nbsp; Node JS</li>
                                </ul>
                            </div>

                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Unlock the Future with a MREN Stack Maestro</p>
                                </div>
                                <a href="#contact" className="btn btn--white">Hire Me</a>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--3">REACT<br /> <small>Developer</small></span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li><FaReact /> &nbsp;React.js / Next.js &nbsp;<TbBrandNextjs /></li>
                                    <li><SiRedux /> &nbsp;Redux</li>
                                    <li><SiMongodb /> MongoDB</li>
                                    <li><SiExpress />&nbsp; Express JS</li>
                                </ul>
                            </div>

                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Crafting Exceptional User Experiences with React. Let's Make Your Vision a Reality</p>
                                </div>
                                <a href="#contact" className="btn btn--white">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tours;












