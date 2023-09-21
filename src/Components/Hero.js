import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import { Power3, gsap } from 'gsap';
import arrow from '../images/arrow-right.svg';
import logo from "../images/logo.png";
import me from "../images/Aman.png";
import resume from "../assets/Aman Dubey Resume.pdf";
import Lottie from "lottie-react";
import mouse from '../images/json/mouse.json';


function Hero() {
    let hero = useRef(null)
    let images = useRef(null)
    let content = useRef(null)
    var tl = gsap.timeline();

    useEffect(() => {
        const boyImage = images;

        //content vars
        const headlineFirst = content.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const contentP = content.children[1];
        const contentButton = content.children[2];


        let ctx = gsap.context(() => {

            gsap.to(hero, { duration: 0, css: { visibility: 'visible' } })

            //Images Animation
            tl.from(boyImage, { duration: 1.6, opacity: 0, y: 1280, ease: Power3.out }, 'Start')
                // .from(boyImage.firstElementChild, { duration: 3, opacity: 0, delay: .6, scale: .6, ease: Power3.out }, .2)

            //Content Animation
            tl.from([headlineFirst.children, headlineSecond.children, headlineThird.children], {
                duration: 1, y: 44, opacity: 0, ease: Power3.out, delay: .8, stagger: .7
            }, .25)
                .from(contentP, { duration: 1, y: 20, opacity: 0, ease: Power3.out }, "-=.2")
                .from(contentButton, { duration: 1, y: 20, opacity: 0, ease: Power3.out }, "-=.3")

        }, hero);

        return () => ctx.revert();

    }, [tl])


    return (
        <div id="hero" className="hero" ref={el => hero = el} >
            <div className="logo-box" >
                <img className="logo-img" src={logo} alt="" />
                <span>Aman</span>
            </div>
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-content-inner" ref={el => content = el}>
                            <h1>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-first">Hi 👋,</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-second">I'm Aman Dubey</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-third">Front-End developer 🧑‍💻</div>
                                </div>
                            </h1>
                            <p>
                                "Crafting digital dreams with code, from pixels to perfection and captivating websites that leave a lasting impression."
                            </p>

                            
                            <div className="btn-row" >
                            <a href={resume} target="_blank">
                                <button className="explore-button">Resume
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="row" />
                                    </div>
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hero-images">
                        <div className="hero-images-inner">
                            <div ref={el => images = el} className="hero-image">
                                {/* <Lottie animationData={boy} loop={true} /> */}
                                <img src={me} alt=""  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animated-svg">
                <Lottie animationData={mouse} loop={true} />
            </div>
        </div>
    );
}

export default Hero;
