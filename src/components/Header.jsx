import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { PiReadCvLogoBold } from "react-icons/pi";
import '../styles/Header.css'

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} alt="Profile Picture" />
            <h3>Jerico Willy Raynaldy</h3>
            <p>Programmer - Mobile Developer - Web Developer</p>
            <div className='socialMedia'>
                <a href='https://www.instagram.com/willyraynaldy/' target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href='https://github.com/SuperWilly23' target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/jerico-willy-raynaldy-379a5028a' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                
            </div>
        </div>
    </header>
  )
}

export default Header
