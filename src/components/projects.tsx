import { useRef } from 'react';

import projectList from '../assets/projectsList';

import '../styles/main.css';

export const Projects = () => {
    const projectsRef = useRef<(HTMLDivElement | null)[]>([]);


    // mouseEnter and mouseLeave used to gray out any projects not being hovered
    const handleMouseEnter = (index: number) => {
        projectsRef.current.forEach((project, idx) => {
            if (project && idx !== index) {
                project.style.filter = 'grayscale(70%)';
                project.style.opacity = '0.6';
            }
        });
    }

    const handleMouseLeave = () => {
        projectsRef.current.forEach((project) => {
            if (project) {
                project.style.filter = '';
                project.style.opacity = '';
            }
        })
    }


    return (
        <div className="projects-container">
            <div className="projects-heading">
                <h1 className="projects-container-title">Projects</h1>
                <h3>Below is a list of projects that I have created, this is not a complete list of every project I've made</h3>
            </div>
            {projectList.map((project, idx) => (
                <div className="project"
                    key={idx}
                    ref={el => projectsRef.current[idx] = el}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={project.img.src} alt={project.img.alt} className="project-img" />
                    <div className="project-text">
                        <h2 className="project-title">
                            {project.title}
                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} className="project-title-link" target='_blank'>
                                        <svg className='project-svg' viewBox='0 0 30 30'>
                                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
                                        </svg>
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} target='_blank'>
                                        <svg className='project-svg arrow' viewBox='0 0 24 24'>
                                            <path d="M7 17L17 7M17 7H7M17 7V17" 
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </h2>
                        <h3 className="project-desc">
                            {project.desc}
                        </h3>
                        <div className="project-technologies">
                            {project.techList.map((tech, index) => (
                                <img src={`/assets/svg/technologies/${tech}.svg`} alt={tech} className="project-tech-img" key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}