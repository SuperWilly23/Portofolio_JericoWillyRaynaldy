import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaJava } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Experience() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <h1>Experience</h1>
                <VerticalTimeline>
                    {/* 2022 - Present */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaJava />}
                    >
                        <h3 className="vertical-timeline-element-title">Student</h3>
                        <h4 className="vertical-timeline-element-subtitle">Universitas Brawijaya</h4>
                        <p>
                            Currently pursuing studies and learning various programming languages while gaining a deeper understanding of software development.
                        </p>
                    </VerticalTimelineElement>

                    {/* 2023 - Website Projects */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaLaravel />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
                        <p>Developed two websites:</p>
                        <ul>
                            <li><strong>Laundry Website:</strong> Built a platform for managing laundry services, including booking and payment features.</li>
                            <li><strong>Library Website:</strong> Created an online library system for book cataloging, borrowing, and membership management.</li>
                        </ul>
                    </VerticalTimelineElement>

                    {/* 2024 - Mobile App Project */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2024"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<SiAndroidstudio />}
                    >
                        <h3 className="vertical-timeline-element-title">Mobile App Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
                        <p>
                            Developed <strong>Lifestep</strong>, a mobile application focused on promoting healthy living through personalized meal plans and exercise routines.
                        </p>
                    </VerticalTimelineElement>

                    {/* 2024 - Rental Website */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2024"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaReact />}
                    >
                        <h3 className="vertical-timeline-element-title">Full-Stack Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
                        <p>Built a <strong>Car Rental Website</strong>, handling both front-end and back-end development. The platform includes:</p>
                        <ul>
                            <li>Car listing and booking features</li>
                            <li>User authentication and payment integration</li>
                            <li>Admin dashboard for managing bookings and fleet data</li>
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Experience;
