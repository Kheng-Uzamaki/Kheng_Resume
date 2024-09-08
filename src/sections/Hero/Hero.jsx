import styles from './HeroStyles.module.css'
import HeroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'

const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={HeroImg} alt="Sokkheng profile picture" />
            <img className={styles.colorMode} src={themeIcon} alt="themeIcon" />
        </div>
        <div className={styles.info}>
            <h1>Heng <br />Sokkheng</h1>
            <h2>Web Developer</h2>
            <span>
                <a href="https://twitter.com/" target='_blank'>
                <img src={twitterIcon} alt="twitter Icon" />
                </a>
                <a href="https://github.com/" target='_blank'>
                <img src={githubIcon} alt="github Icon" />
                </a>
                <a href="https://linkedin.com/" target='_blank'>
                <img src={linkedinIcon} alt="linkedin Icon" />
                </a>
            </span>
            <p>With a passion for developing modern React web app for commercial business.</p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero