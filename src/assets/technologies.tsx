
//Import all svgs
import arduino from '/assets/svg/technologies/arduino.svg';
import cpp from '/assets/svg/technologies/cpp.svg';
import css from '/assets/svg/technologies/css.svg';
import github from '/assets/svg/technologies/github.svg';
import html from '/assets/svg/technologies/html.svg';
import java from '/assets/svg/technologies/java.svg';
import javascript from '/assets/svg/technologies/javascript.svg';
import mysql from '/assets/svg/technologies/mysql-official.svg';
import netlify from '/assets/svg/technologies/netlify.svg';
import node from '/assets/svg/technologies/node.svg';
import php from '/assets/svg/technologies/php.svg';
import python from '/assets/svg/technologies/python.svg';
import raspberry from '/assets/svg/technologies/raspberry.svg';
import react from '/assets/svg/technologies/react.svg';
import vscode from '/assets/svg/technologies/vscode.svg';

export const Technologies = () => {

    const techs = [
        {src: arduino, alt: 'Arduino'},
        {src: cpp, alt: 'C++'},
        {src: css, alt: 'CSS'},
        {src: github, alt: 'GitHub'},
        {src: html, alt: 'HTML'},
        {src: java, alt: 'Java'},
        {src: javascript, alt: 'JavaScript'},
        {src: mysql, alt: 'MySQL'},
        {src: netlify, alt: 'Netlify'},
        {src: node, alt: 'Node JS'},
        {src: php, alt: 'PHP'},
        {src: python, alt: 'Python'},
        {src: raspberry, alt: 'Raspberry Pi'},
        {src: react, alt: 'React'},
        {src: vscode, alt: 'Vs Code'},
    ]

    return (
        <div className="tech-container">
            <h2 className="tech-title">Skills Showcase</h2>
            <div className="tech-grid">
                {techs.map((tech, index) => (
                    <img key={index} src={tech.src} alt={tech.alt} className='tech-icon'/>
                ))}
            </div>
            <h3>I am always learning new skills and languages including AWS, Figma, Firebase, TypeScript, and C#</h3>
        </div>
    )
}