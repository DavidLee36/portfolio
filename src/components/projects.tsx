import projectList from '../assets/projectsList';

import '../styles/main.css';

export const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects-heading">
                <h1 className="projects-container-title">Projects</h1>
                <h3>Below is a list of projects that I have created, this is not a complete list of every project I've made</h3>
            </div>
            {projectList.map((project, idx) => (
                <div className="project" key={idx}>
                    <img src={project.img.src} alt={project.img.alt} className="project-img" />
                    <div className="project-text">
                        <h2 className="project-title">
                            {project.title}
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