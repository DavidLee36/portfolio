
//Import all svgs
import arduino from '../../public/assets/svg/technologies/arduino.svg';
import cpp from '../../public/assets/svg/technologies/cpp.svg';
import css from '../../public/assets/svg/technologies/css.svg';
import github from '../../public/assets/svg/technologies/github.svg';
import html from '../../public/assets/svg/technologies/html.svg';
import java from '../../public/assets/svg/technologies/java.svg';
import javascript from '../../public/assets/svg/technologies/javascript.svg';
import netlify from '../../public/assets/svg/technologies/netlify.svg';
import node from '../../public/assets/svg/technologies/node.svg';
import python from '../../public/assets/svg/technologies/python.svg';
import raspberry from '../../public/assets/svg/technologies/raspberry.svg';
import react from '../../public/assets/svg/technologies/react.svg';
import vscode from '../../public/assets/svg/technologies/vscode.svg';

export const Technologies = () => {

    const techs = [
        {src: arduino, alt: 'Arduino'},
        {src: cpp, alt: 'C++'},
        {src: css, alt: 'CSS'},
        {src: github, alt: 'GitHub'},
        {src: html, alt: 'HTML'},
        {src: java, alt: 'Java'},
        {src: javascript, alt: 'JavaScript'},
        {src: netlify, alt: 'Netlify'},
        {src: node, alt: 'Node JS'},
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
            <h3>I am always learning new skills and languages including AWS, Figma, Firebase, and C#</h3>
        </div>
    )
}