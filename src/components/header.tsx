import { links } from '../assets/links'; //Social media icons/links

import profilePic from '../../public/assets/portfolioPFP.jpg';
import '../styles/main.css';

export const Header = () => {
    return (
        <div className='header-container'>
            <div className="greeting">
                <div className="greeting-text">
                    <h1>David Lee</h1>
                    <h2>Software Engineer</h2>
                    <h3><br/>I'm a software engineer with a Bachelor's degree in Computer Science from <a href='https://www.cwu.edu/academics/computer-science/'> Central Washington University</a>, class of 2023. I have a strong passion for coding and problem-solving, with experience in software development, embedded systems, CAD, and electronics. I love tackling new challenges, continuously expanding my skills, and working on innovative projects that push the boundaries of technology.</h3>
                    {links()}
                </div>
                <img src={profilePic} alt="portrait" className='profile-pic'/>
            </div>
        </div>
    )
}