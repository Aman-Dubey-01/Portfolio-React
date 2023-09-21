import React from 'react';
import './Footer.scss';
import { AiOutlineLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';



const Footer = () => {
    return (
        <section id='footer'>
            <div className="footer-container">
                <div className="left">
                    <h1>Aman Dubey</h1>
                    <h3>Front-End Developer  |  UI-UX Designer</h3>
                    <p> <MdEmail /> dubeyaman905@gmail.com</p>
                </div>
                <div className="right">
                    <h1>Social</h1>
                    <AiOutlineLinkedin className='social-icon' />
                    <AiFillGithub className='social-icon'/>
                    <AiOutlineInstagram className='social-icon'/>
                </div>
            </div>
        </section>
    )
}

export default Footer;