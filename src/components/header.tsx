import { links } from '../assets/links'; //Social media icons/links

import profilePic from '/assets/images/portfolioPFP.jpg';
import '../styles/main.css';

export const Header = () => {
    return (
        <div className='header-container'>
            <div className="greeting">
                <div className="greeting-text">
                    <h1>David Lee</h1>
                    <h2>Software Engineer</h2>
                    <h3><br />I'm a software engineer with a Bachelor's degree in Computer Science from <a href='https://www.cwu.edu/academics/computer-science/'> Central Washington University</a>, class of 2023. I have a strong passion for coding and problem-solving, with experience in software development, embedded systems, CAD, and electronics. I love tackling new challenges, continuously expanding my skills, and working on innovative projects that push the boundaries of technology.</h3>
                    {links()}
                    <a href="/assets/Resume.pdf" target='_blank' className='resume-link'>
                        <h2 className="resume">
                            View Resume
                            <svg className='arrow resume-svg' viewBox='0 0 24 24'>
                                <path d="M7 17L17 7M17 7H7M17 7V17"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </h2>
                    </a>
                </div>
                <img src={profilePic} alt="portrait" className='profile-pic' />
            </div>
        </div>
    )
}