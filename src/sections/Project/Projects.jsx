import { useState } from "react";
import styles from "./ProjectsStyle.module.css";
import ProjectCard from "../../Common/ProjectCard";
import projects from "../../project";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  // Limit the number of projects displayed based on the showMore state
  const displayedProjects = showMore ? projects : projects.slice(0, 8);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            src={project.image}
            link={project.github}
            h3={project.name}
            p={project.description}
            demoLink={project.demo}
          />
        ))}
      </div>
      {/* Button to toggle the showMore state */}
      <div>
        <button
          className={styles.showMoreButton}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
