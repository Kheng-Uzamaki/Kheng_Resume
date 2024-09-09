import styles from "./ContactStyle.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zm5uxak", "template_8pwzysv", form.current, {
        publicKey: "V3xrx3aQ1fYZCv2Ys",
      })
      .then(
        () => {
          toast.success("Your message has been sent successfully!",{
            autoClose:3000
          }); // Success toast

          form.current.reset(); // Clear form
        },
        (error) => {
          toast.error("Failed to send the message, please try again later.",{
            autoClose:3000
          }); // Error toast
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
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
        <input type="submit" className="hover btn" value="Submit" />
      </form>
      <ToastContainer />
    </section>
  );
}

export default Contact;
