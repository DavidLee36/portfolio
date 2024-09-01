import React from 'react';

//Import all svgs
import arduino from '../../public/assets/svg/technologies/arduino.svg';
import cpp from '../../public/assets/svg/technologies/cpp.svg';
import css from '../../public/assets/svg/technologies/css.svg';
import github from '../../public/assets/svg/technologies/github.svg';
import html from '../../public/assets/svg/technologies/html.svg';
import java from '../../public/assets/svg/technologies/java.svg';
import javascript from '../../public/assets/svg/technologies/javascript.svg';
import python from '../../public/assets/svg/technologies/python.svg';
import raspberry from '../../public/assets/svg/technologies/raspberry.svg';
import react from '../../public/assets/svg/technologies/react.svg';

export const Technologies = () => {

    const techs = [
        {src: arduino, alt: 'Arduino'},
        {src: cpp, alt: 'C++'},
        {src: css, alt: 'CSS'},
        {src: github, alt: 'GitHub'},
        {src: html, alt: 'HTML'},
        {src: java, alt: 'Java'},
        {src: javascript, alt: 'JavaScript'},
        {src: python, alt: 'Python'},
        {src: raspberry, alt: 'Raspberry Pi'},
        {src: react, alt: 'React'},
    ]

    return (
        <div className="tech-container">
            <h2 className="tech-title">Skills Showcase</h2>
            <div className="tech-grid">
                {techs.map((tech, index) => (
                    <img key={index} src={tech.src} alt={tech.alt} className='tech-icon'/>
                ))}
            </div>
        </div>
    )
}