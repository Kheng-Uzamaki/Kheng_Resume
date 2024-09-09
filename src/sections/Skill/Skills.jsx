import styles from "./SkillsStyles.module.css";
import { useTheme } from "../../Common/ThemeContext";
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import SkillList from "../../Common/SkillList";

const Skills = () => {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="NodeJs" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="ExpressJs" />
        <SkillList src={checkMarkIcon} skill="PHP" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="Laravel" />
        <SkillList src={checkMarkIcon} skill="Taiwind" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="AWS/EC2" />
        <SkillList src={checkMarkIcon} skill="Ai/ChatGPT" />
        <SkillList src={checkMarkIcon} skill="Postgres" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Springboot" />
        <SkillList src={checkMarkIcon} skill="WindowOs" />
        <SkillList src={checkMarkIcon} skill="CentOs/Ubuntu" />
        <SkillList src={checkMarkIcon} skill="Window Server" />
        <SkillList src={checkMarkIcon} skill="Microsoft Office" />
      </div>
    </section>
  );
};

export default Skills;
