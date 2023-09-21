import React, { useEffect, useRef } from "react";
import './About.scss';
import reactimg from '../images/svg/react.svg'
import htmlimg from '../images/svg/html.svg'
import sass from '../images/svg/sass.svg'
import gsapimg from '../images/svg/gsap.svg'
import js from '../images/svg/js.svg'
import node from '../images/svg/Nodejs.svg'
import express from '../images/svg/express.svg'
import mongo from '../images/svg/mongo.svg'
import prisma from '../images/svg/prisma.svg'
import git from '../images/svg/git.svg'

import devani from '../images/json/Development.json';
import Lottie from "lottie-react";

import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)



const About = () => {

  let aboutref = useRef(null)

  useEffect(() => {
    ScrollTrigger.refresh();
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about"
      }

    })

    let about = aboutref.current;
    let content = aboutref.children[2];


    let ctx = gsap.context(() => {

      // tl.from()  
      tl.from(".abouthead", { duration: 1, y: 50, opacity: 0, stagger: .5, ease: Power3.out }, "<+=.2")
        .from(content, { duration: 1, opacity: 0, y: "40px", delay: .5, ease: Power3.easeOut }, "<+=.6")
        .from(".skills", { duration: 1, x: "-100vw", stagger: 0.3, ease: "Power3.easeOut" }, "<+=.3");

    }, about);

    return () => ctx.revert();
  })




  return (
    <div className='about' ref={el => aboutref = el}>
      <div className="animated-svg">
        <Lottie animationData={devani} loop={true} />
      </div>

      <div className="about-head">
        <h3 className="abouthead">Introduction</h3>
        <h2 className="abouthead">about me</h2>
        <h4 className="abouthead">Front-End Developer 🧑‍💻 | UI-UX Designer | Web Animation 📸 </h4>
      </div>

      <div className="about-content">
        <p>I'm a skilled Frontend Web Developer with experience in JavaScript and expertise in frameworks/library like  React.js, SASS, Bootstap and GSAP. I'm a quick learner and collaborate closely with clients to create efficient scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </p>
        <div className="skill-container">

          <div className="skills">
            <img src={reactimg} alt="React" />
            <h6>React JS</h6>
          </div>
          <div className="skills">
            <img src={node} alt="React" />
            <h6>NodeJS</h6>
          </div>
          <div className="skills">
            <img src={express} alt="React" />
            <h6>Express JS</h6>
          </div>
          <div className="skills">
            <img src={mongo} alt="React" />
            <h6>MongoDB</h6>
          </div>

          <div className="skills">
            <img src={prisma} alt="" />
            <h6>Prisma</h6>
          </div>
          <div className="skills">
            <img src={js} alt="" />
            <h6>JavaScript</h6>
          </div>

          <div className="skills">
            <img src={sass} alt="" />
            <h6>Sass</h6>
          </div>

          <div className="skills">
            <img src={htmlimg} alt="" />
            <h6>HTML & CSS</h6>
          </div>
          <div className="skills">
            <img src={gsapimg} alt="" />
            <h6>GSAP</h6>
          </div>
          <div className="skills">
            <img src={git} alt="" />
            <h6>Git</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About