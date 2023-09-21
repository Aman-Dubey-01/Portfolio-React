import React, { useLayoutEffect, useRef } from 'react';
import './Experience.scss';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    let mainref = useRef(null);

    useLayoutEffect(() => {
        ScrollTrigger.refresh();
        const main = mainref;

        let ctx = gsap.context(() => {

            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mainref,
                    // markers: true,
                    // pin: true,
                    start: "top top",
                    end: "70% bottom",
                    scrub: 2,
                    toggleActions: "restart none none reverse"
                }
            });

            tl.to("#center", { height: "100%", ease: Power3.out }, 'a')
                .to(".experience", { marginTop: "0%" }, 'a')
                .to("#top", { top: "-40%", }, 'a')
                .to("#bottom", { bottom: "-65%", }, 'a')
                .to("#top-h1", { top: "70%" }, 'a')
                .to("#bottom-h1", { bottom: "30%" }, 'a')
                .to(".content", { delay: -0.2, css: { marginTop: "0%" } })

            tl.from(".expleft", { duration: 0.4, opacity: 0, x: -500, ease: Power3.out }, "a")
                .from(".expright", { duration: 0.4, opacity: 0, x: 500, ease: Power3.out })


        }, main);


        return () => ctx.revert();

    }, [])





    return (
        <>
            <div id="experience" className='expcont' ref={el => mainref = el}>
                <div id="top">
                    <h1 id="top-h1">Experience</h1>
                </div>
                <div id="center">
                    <div className="content">
                        <div className="experience">
                            <div className="experience-head">
                                <h4 className="experiencehead">what i have done so far</h4>
                                <h2 className="experiencehead">Experience</h2>
                            </div>

                            <div className="experience-content">
                                <div className="experience-container">
                                    <div className="timeline">
                                        <div className="container left expleft">

                                            <div className="content">
                                                <h3>Front-End Developer</h3>
                                                <h4>Burger Desire</h4>
                                                <ul>
                                                    <li>
                                                        Developing and maintaining frontend of using using React.js and other related technologies.
                                                    </li>
                                                    <li>
                                                        Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.
                                                    </li>
                                                    <li>
                                                        Implementing responsive design and ensuring cross-browser compatibility.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="container right expright">
                                            <div className="content">
                                                <h3>Freelancing</h3>
                                                <h4>Self Based</h4>
                                                <ul>
                                                    <li>
                                                        Collaborated with clients to understand their business requirements, translating them into actionable frontend solutions that aligned with their brand identity and goals.                                                    </li>
                                                    <li>
                                                        Provided ongoing maintenance and support to clients, promptly addressing bug fixes and implementing feature enhancements.                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bottom">
                    <h1 id="bottom-h1">Experience</h1>
                </div>
            </div>
        </>
    )
}

export default Experience;