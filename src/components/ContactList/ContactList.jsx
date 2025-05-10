import { useSelector } from "react-redux";
import {
  selectLoading,
  selectError,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ul className={s.list}>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
