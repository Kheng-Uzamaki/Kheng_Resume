import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
// import CV from "../../assets/cv.pdf";
import Kheng_CV from "../../assets/Kheng_Resume.pdf"
import { useTheme } from "../../Common/ThemeContext";
import k_logo from '../../../public/k_logo.ico'

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light'? sun : moon; 
  // const twitterIcon = theme === 'light'? twitterLight : twitterDark; 
  const githubIcon = theme === 'light'? githubLight : githubDark; 
  const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark; 

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={HeroImg}
          alt="Sokkheng profile picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="themeIcon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Heng <br />
          Sokkheng
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="/" >
            <img src={k_logo} alt="Kheng Logo" />
          </a>
          <a href="https://github.com/Kheng-Uzamaki" target="_blank">
            <img src={githubIcon} alt="github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/heng-sokkheng-8b074124a/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern web app for commercial
          business.
        </p>
        <a href={Kheng_CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
