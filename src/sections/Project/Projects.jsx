import styles from "./ProjectsStyle.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../Common/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png"
import hipsster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link='https:/github.com'  h3='Viberr' p='Streaming App'/>
        <ProjectCard src={freshBurger} link='https:/github.com'  h3='Fresh Burger' p='Burger Restaurant'/>
        <ProjectCard src={hipsster} link='https:/github.com'  h3='Hipsster' p='Glasses Shop'/>
        <ProjectCard src={fitlift} link='https:/github.com'  h3='FitLift' p='Fitness App'/>
      </div>
    </section>
  );
};

export default Projects;
