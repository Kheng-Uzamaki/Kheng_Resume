import githubIcon from "../assets/github-light.svg";
import styles from "../sections/Project/ProjectsStyle.module.css";

function ProjectCard({ src, link, h3, p, demoLink }) {
  return (
    <div className={styles.projectCard}>
      <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>
          <span>
            <img src={githubIcon} alt="" />
          </span>
          {h3}
        </h3>
        <p>{p}</p>
      </a>
      {demoLink && (
        <a href={demoLink} target="_blank">
          <button className={styles.demoButton}>Demo</button>
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
