import React, { useLayoutEffect, useRef, useState } from 'react';
import './Contact.scss';
import { MdEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineLinkedin, AiOutlineArrowRight } from 'react-icons/ai';
import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

import msg from '../images/json/contact.json';
import Lottie from "lottie-react";

gsap.registerPlugin(ScrollTrigger)
const Contact = () => {

    let contactref = useRef(null)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b90uwql', 'template_1je0fzq', form.current, 'Gs0PeeDP40gI2hGCi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            setEmail("");
            setMessage("");
            setName("");
            alert("Your message has been sent successfully. I will contact you soon.");

    };


    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            ScrollTrigger.refresh();

            var tl_c = gsap.timeline({
                scrollTrigger: {
                    trigger: contactref,
                    toggleActions: "restart none none reverse"
                }
            })

            // Animation 
            tl_c.from(".contact__title", { y: 50, opacity: 0 })
            tl_c.from(".contact__card", { duration: 1, x: -100, opacity: 0, stagger: .6, ease: Power3.out }, 'a')
            tl_c.from(".contact__card-title", { duration: 1, y: 50, opacity: 0, stagger: .6, ease: Power3.out }, '<+=.5')
            tl_c.from(".contact__card-data", { duration: 1, y: 20, opacity: 0, stagger: .6, ease: Power3.out }, '<+=.5')
            tl_c.from(".contact__button", { duration: 1, y: 20, opacity: 0, stagger: .6, ease: Power3.out }, '<+=.5')

            // Form side
            tl_c.from(".contact__form-div", { duration: .8, x: 200, opacity: 0, stagger: .6, ease: Power3.out }, 'a')
                .from(".button_adv_cont", { duration: .8, x: 100, opacity: 0, ease: Power3.out }, 'a+=1.8')


        }, contactref);

        return () => ctx.revert();
    }, [])

    return (
        <section id="contact" className="contact" ref={el => contactref = el}>
            <div className="animated-svg">
                <Lottie animationData={msg} loop={true} />
            </div>

            <div className="contact__container contactgrid">
                <div className="contactleft">
                    <div className="contact__content">
                        <h3 className="contact__title">Talk to me</h3>

                        <div className="contact__info">
                            <div className="contact__card">
                                <MdEmail className='contact__card-icon' />
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">Dubeyaman905@gmail.com</span>

                                <a
                                    href="mailto:Dubeyaman905@gmail.com"
                                    target="_blank"
                                    className="contact__button"
                                >
                                    Write Me
                                    <AiOutlineArrowRight />
                                </a>
                            </div>

                            <div className="contact__card">
                                <BsWhatsapp className='contact__card-icon' />
                                <h3 className="contact__card-title">Whatsapp</h3>
                                <span className="contact__card-data">+91 8178942123</span>

                                <a
                                    href="https://api.whatsapp.com/send?phone=918178942123&text=Hello, more information!"
                                    target="_blank"
                                    className="contact__button"
                                >
                                    Write Me
                                    <AiOutlineArrowRight />
                                </a>
                            </div>

                            <div className="contact__card">
                                <AiOutlineLinkedin className='contact__card-icon' />
                                <h3 className="contact__card-title">linkedin</h3>
                                <span className="contact__card-data">Aman Dubey</span>

                                <a
                                    href="https://www.linkedin.com/in/aman-dubey-me/"
                                    target="_blank"
                                    className="contact__button"
                                >
                                    Write Me
                                    <AiOutlineArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contactright">
                    <div className="contact__content">
                        <h3 className="contact__title">Write me your project</h3>

                        <form action="" ref={form} onSubmit={sendEmail} className="contact__form">
                            <div className="contact__form-div">
                                <label htmlFor="" className="contact__form-tag">Name</label>
                                <input
                                    type="text"
                                    className="contact__form-input"
                                    placeholder="Enter your name"
                                    name='from_name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>

                            <div className="contact__form-div">
                                <label for="" className="contact__form-tag">Mail</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="contact__form-input"
                                    name="user_email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="contact__form-div contact__form-area">
                                <label htmlFor="" className="contact__form-tag">Message</label>
                                <textarea
                                    className="contact__form-input"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Write your message"
                                    name="message"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="button_adv_cont">
                                <button className="contact-btn_adv">Send Message</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Contact;