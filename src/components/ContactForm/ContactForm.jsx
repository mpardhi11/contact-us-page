import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
            message="Lets stat chat"
          />
          <Button
            text="VIA call"
            icon={<FaPhoneAlt fontSize="24px" />}
            message="Please contact at +91 99887-76655"
          />
        </div>
        <Button
          text="Via email form"
          icon={<HiMail fontSize="24px" />}
          isOutLined={true}
          message="Mail us at 'demo.mail@co.com'"
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" id="" rows="5" className={styles.no_resize} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              text="Submit Form"
              message="Thanks for submission we will react out"
            />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="brand logo" />
      </div>
    </section>
  );
};

export default ContactForm;
