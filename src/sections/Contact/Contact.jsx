import styles from "./ContactStyle.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            id="email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Massage
          </label>
          <textarea
            name="message"
            placeholder="Message"
            id="message"
            required
          ></textarea>
        </div>
        <input type="submit" className="hover btn" value='Submit' />
      </form>
    </section>
  );
}

export default Contact;
