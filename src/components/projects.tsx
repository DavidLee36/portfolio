import projectList from '../assets/projectsList';

import '../styles/main.css';

export const Projects = () => {
    return (
        <div className="projects-container">
            {projectList.map((project, idx) => (
                <div className="project" key={idx}>
                    <div className="project-main-content">
                        <img src={project.img.src} alt={project.img.alt} className="project-img" />
                        <div className="project-text">
                            <h2 className="project-title">
                                {project.title}
                            </h2>
                            <p className="project-desc">
                                {project.desc}
                            </p>
                        </div>
                    </div>
                    <div className="project-technologies">
                        {project.techList.map((tech, index) => (
                            <img src={`/assets/svg/technologies/${tech}.svg`} alt={tech} className="project-tech-img" key={index}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}