import css from "./contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const Contact = ({ contact }) => {
  return (
    <div className={css.all}>
      <div className={css.info}>
        <div className={css.person}>
          <IoPerson />
          <p className={css.p}>{contact.name}</p>
        </div>
        <div className={css.phoneNumber}>
          <FaPhoneAlt />
          <p className={css.p}> {contact.number}</p>
        </div>
      </div>
      <button>Delete</button>
    </div>
  );
};
export default Contact;
