import githubIcon from "../assets/github-light.svg";
import styles from "../sections/Project/ProjectsStyle.module.css";
import { useTheme } from "./ThemeContext";

function ProjectCard({ src, link, h3, p, demoLink }) {
  const { theme } = useTheme();
  const imgClass =
    theme === "light" ? styles.darkThemeImg : styles.lightThemeImg;

  return (
    <div className={styles.projectCard}>
      <a href={link} target="_blank">
        <img
          className={`${styles.hover} ${imgClass}`}
          src={src}
          alt={`${h3} logo`}
        />
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
