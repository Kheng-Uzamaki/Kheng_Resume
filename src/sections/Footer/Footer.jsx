import styles from "./FooterStyle.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        Tel: (+855) 965 284 100 <br />
        Email:{" "}
        <a href="mailto:hengsokkheng145@gmail.com">hengsokkheng145@gmail.com</a><br /><br />
        &copy; 2024 Heng Sokkheng. <br />
        All rights reserved. <br />
      </p>
    </section>
  );
}

export default Footer;
