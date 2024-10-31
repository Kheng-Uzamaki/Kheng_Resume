import PropTypes from "prop-types";
import githubLight from "../assets/github-light.svg";
import githubDark from "../assets/github-dark.svg";
import styles from "../sections/Project/ProjectsStyle.module.css";
import { useTheme } from "./ThemeContext";

function ProjectCard({ src, link, h3, p, demoLink }) {
  const { theme } = useTheme();
  const imgClass =
    theme === "light" ? styles.darkThemeImg : styles.lightThemeImg;

  const githubIcon = theme === "light" ? githubLight : githubDark;

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

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
};

export default ProjectCard;
