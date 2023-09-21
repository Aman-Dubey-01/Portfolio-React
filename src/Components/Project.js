import React, { useRef } from 'react';
import './Project.scss';
import p1 from '../images/p1.png';
import p2 from '../images/faerlyf.png';
import p3 from '../images/portfolio.png';
import p4 from '../images/portold.png';
import amazon from '../images/amazon.jpg';
import penchapters from '../images/Penchapters.jpg';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Power3 } from 'gsap';

gsap.registerPlugin(ScrollTrigger)
const Project = () => {

  let projectref = useRef(null);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
    let ctx = gsap.context(() => {

      var tl_p = gsap.timeline({
        scrollTrigger: {
          trigger: projectref,
          // markers:true,
          start: "-800px 50%",
          end: "80% 80%",
          scrub: 2,
          toggleActions: "restart none none none"
        }
      })

      // const project = projectref.current;
      const heading = projectref.children[0];
      const card1 = projectref.children[1].children[0];
      const card2 = projectref.children[1].children[1];
      const card3 = projectref.children[1].children[2];
      const card4 = projectref.children[1].children[3];
      const card5 = projectref.children[1].children[4];
      const card6 = projectref.children[1].children[5];

      tl_p.from(heading.children[0], { duration: 1.5, y: 50, opacity: 0, ease: Power3.out }, 'a')
      tl_p.from(heading.children[2], { y: 50, opacity: 0, ease: Power3.out }, '<+.2')

      tl_p.from(card1, { width: 0, x: 100, opacity: 0, ease: Power3.out }, 'a+.2')
        .from(card1.children[0].children[0], { width: '0px', opacity: 0, ease: Power3.out }, '<+.5')
        .from(card1.children[1].children[0], { y: 20, opacity: 0, ease: Power3.out }, '<')
        .from(card1.children[1].children[1], { y: 10, opacity: 0, ease: Power3.out }, '<')
        .from(card1.children[1].children[2], { x: 100, opacity: 0, ease: Power3.out }, '<+.2')

      tl_p.from(card2, { width: 0, x: -100, opacity: 0 }, 'a+.7')
        .from(card2.children[0].children[0], { height: '0px', opacity: 0 }, '<+.5')
        .from(card2.children[1].children[0], { y: 20, opacity: 0 }, '<')
        .from(card2.children[1].children[1], { y: 10, opacity: 0 }, '<')
        .from(card2.children[1].children[2], { x: 100, opacity: 0 }, '<+.2')


      tl_p.from(card3, { width: 0, x: 100, opacity: 0 }, 'a+1')
        .from(card3.children[0].children[0], { width: '0px', opacity: 0 }, '<+.5')
        .from(card3.children[1].children[0], { y: 20, opacity: 0 }, '<')
        .from(card3.children[1].children[1], { y: 10, opacity: 0 }, '<')
        .from(card3.children[1].children[2], { x: 100, opacity: 0 }, '<+.2')


      tl_p.from(card4, { width: 0, x: -100, opacity: 0 }, 'a+1.2')
        .from(card4.children[0].children[0], { height: '0px', opacity: 0 }, '<+.5')
        .from(card4.children[1].children[0], { y: 20, opacity: 0 }, '<')
        .from(card4.children[1].children[1], { y: 10, opacity: 0 }, '<')
        .from(card4.children[1].children[2], { x: 100, opacity: 0 }, '<+.2')

      tl_p.from(card5, { width: 0, x: -100, opacity: 0 }, 'a+1.5')
        .from(card5.children[0].children[0], { height: '0px', opacity: 0 }, '<+.5')
        .from(card5.children[1].children[0], { y: 20, opacity: 0 }, '<')
        .from(card5.children[1].children[1], { y: 10, opacity: 0 }, '<')
        .from(card5.children[1].children[2], { x: 100, opacity: 0 }, '<+.2')

      tl_p.from(card6, { width: 0, x: -100, opacity: 0 }, 'a+1.7')
        .from(card6.children[0].children[0], { height: '0px', opacity: 0 }, '<+.5')
        .from(card6.children[1].children[0], { y: 20, opacity: 0 }, '<')
        .from(card6.children[1].children[1], { y: 10, opacity: 0 }, '<')
        .from(card6.children[1].children[2], { x: 100, opacity: 0 }, '<+.2')



    }, projectref);

    return () => ctx.revert();
  }, [])


  return (
    <section id='project' className='project' ref={el => projectref = el}>
      <div className="main-text">
        <h1>Projects</h1>
        <span></span>
        <p>Here you will find some of my personal projects that I created </p>
      </div>

      <div className="project-container">

        <div className="project-item project1">
          <div className="project-img">
            <img className='small' src={penchapters} alt="" />
          </div>
          <div className="project-description">
            <h2>PenChapters</h2>


            <p>PenChapters is a dynamic blogging platform that leverages Next.js, Prisma, MongoDB, OAuth, and Firebase
              to offer a secure and responsive user experience. With OAuth and Firebase, it ensures reliable user
              authentication, while Prisma and MongoDB optimize data management for peak performance.</p>
            <div className="link">
              <a href="https://penchapters.vercel.app" target="_blank" className="contact__button">
                Live Link<AiOutlineArrowRight />
              </a>
              <a href="https://drive.google.com/file/d/11nSlyx2HOW_LdbLTy2Tw_3UAG-B7Q3ST/view?usp=sharing" target="_blank" className="contact__button">
                Video Link<AiOutlineArrowRight />
              </a>

            </div>
          </div>
        </div>
        <div className="project-item project1">
          <div className="project-img">
            <img className='small' src={amazon} alt="" />
          </div>
          <div className="project-description">
            <h2>Amazon Clone</h2>
            <p>This Amazon clone project, built with React, Sass, and Firebase, offers robust features including
              secure login authentication, seamless order management, and efficient cart management, ensuring a
              user-friendly e-commerce experience.</p>
              <div className="link">
            <a href="https://clone-amazon-aman.netlify.app/" target="_blank" className="contact__button">
              Live Link<AiOutlineArrowRight />
            </a>
            <a href="https://drive.google.com/file/d/11nSlyx2HOW_LdbLTy2Tw_3UAG-B7Q3ST/view?usp=sharing" target="_blank" className="contact__button">
              Video Link<AiOutlineArrowRight />
            </a>
            </div>
          </div>
        </div>
        <div className="project-item project2">
          <div className="project-img">
            <img src={p2} alt="" />
          </div>
          <div className="project-description">
            <h2>Faerlyf </h2>
            <p>Explore, Wander, and Discover! Our captivating travel agency website offers unforgettable journeys, seamless navigation, and stunning visuals</p>
            <a href="https://faerlyf.netlify.app/" target="_blank" className="contact__button">
              Live Link<AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <div className="project-item project1">
          <div className="project-img">
            <img src={p1} alt="" />
          </div>
          <div className="project-description">
            <h2>Burger Desire</h2>
            <p>A mouthwatering restaurant website showcasing gourmet burgers, enticing visuals, impeccable design, and a delightful culinary experience.</p>
            <a href="https://desireburger.netlify.app/" target="_blank" className="contact__button">
              Live Link<AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <div className="project-item project3">
          <div className="project-img">
            <img src={p3} alt="" />
          </div>
          <div className="project-description">
            <h2>Portfolio</h2>
            <p> A showcase of my passion, skills, and creativity, capturing my journey and projects</p>
            <a href="mailto:Dubeyaman905@gmail.com" target="_blank" className="contact__button">
              Live Link<AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <div className="project-item project4">
          <div className="project-img">
            <img src={p4} alt="" />
          </div>
          <div className="project-description">
            <h2>Portfolio</h2>
            <p> A showcase of my passion, skills, and creativity, capturing my journey and projects</p>
            <a href="https://aman-dubey-01.github.io/Portfolio/" target="_blank" className="contact__button">
              Live Link<AiOutlineArrowRight className="contact__button-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project