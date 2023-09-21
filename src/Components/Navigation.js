import React, { useState } from 'react';
import './Navigation.scss';
import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineMail, AiFillHome, AiFillMessage, AiOutlineShareAlt } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { FaLaptopCode, FaBars } from 'react-icons/fa';

const Navigation = () => {
    const [isNavActive, setNavActive] = useState(false);
    const [isSocialActive, setSocialActive] = useState(false);

    function OnClickNavBtn() {
        setNavActive(!isNavActive);
    }
    function OnClickSocialBtn() {
        setSocialActive(!isSocialActive);

    }

    return (
        <>
            <div id="circularMenu1" className={`circular-menu circular-menu-navigation ${isNavActive ? 'active' : ''}`}  >
                <a className="floating-btn" onClick={OnClickNavBtn}>
                    <i><FaBars /></i>
                </a>
                <menu className="items-wrapper">
                    <a href="#hero" className="menu-item "><AiFillHome /> </a>
                    <a href="#experience" className="menu-item "><MdWork /> </a>
                    <a href="#project" className="menu-item "><FaLaptopCode /> </a>
                    <a href="#contact" className="menu-item "><AiFillMessage /> </a>
                </menu>
            </div>
            <div id="circularMenu" className={` circular-menu-social ${isSocialActive ? 'active' : ''}`}>
                <a className="floating-btn" onClick={OnClickSocialBtn}>
                    <i ><AiOutlineShareAlt /></i>
                </a>
                <menu className="items-wrapper">
                    <a href="https://github.com/Aman-Dubey-01" target="_blank" className="menu-item "><AiFillGithub /> </a>
                    <a href="https://www.linkedin.com/in/aman-dubey-me/" target="_blank" className="menu-item "><AiOutlineLinkedin /> </a>
                    <a href="https://www.instagram.com/amandubey.25/" target="_blank" className="menu-item "><AiOutlineInstagram /> </a>
                    <a href="mailto:Dubeyaman905@gmail.com" target="_blank" className="menu-item "><AiOutlineMail /> </a>
                </menu>
            </div>


        </>

    )
}

export default Navigation;