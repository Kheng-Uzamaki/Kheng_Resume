import styles from "./FooterStyle.module.css";
import logo from "../../../public/k_logo.ico";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <img  src={logo} alt="K-logo" style={{
        width: "100px",
        height: "auto",
        margin: "auto",
        display: "block"
      }}/>

      <p style={{
        marginTop: "20px",
      }}>
        Tel: (+855) 965 284 100 <br />
        Email:{" "}
        <a href="mailto:hengsokkheng145@gmail.com">hengsokkheng145@gmail.com</a>
        <br />
        <br />
        &copy; 2024 Heng Sokkheng. <br />
        All rights reserved. <br />
      </p>
    </section>
  );
}

export default Footer;
