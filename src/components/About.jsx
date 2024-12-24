import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io"
import { FaGit } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { LuCodeXml } from "react-icons/lu";
import { SiAndroidstudio } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaBootstrap } from "react-icons/fa";
function About() {
  return (
    <section id="about">
    <div className='wrapper'>
        <h3>About</h3>
        <p>My name is Jerico Willy Raynaldy, a Junior Programmer currently studying Information Technology at Brawijaya University. I have a keen interest in front-end, back-end, and mobile application development, and enjoy the challenge of designing functional, aesthetic, and user-friendly applications. With a passion for continuous learning, I always keep up with the latest technology to improve my skills. I am also adaptable, love working in a team, and committed to giving my best contribution in every project I work on.
        </p>
        <h4>Programming Language & Tools</h4>
        <div className='skills'>
        <FaHtml5 /> <FaCss3 />
        <DiMysql />
        <FaJava />
        <FaPhp />
        <FaGit />
        <FaReact />
        <FaLaravel />
        <SiKotlin />
        <LuCodeXml />
        <SiAndroidstudio />
        <VscVscode />
        <FaBootstrap />
        </div>
    </div>
    </section>
  )
}

export default About