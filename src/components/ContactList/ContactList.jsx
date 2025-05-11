import { useSelector } from "react-redux";
import {
  selectLoading,
  selectError,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ul className="flex flex-wrap gap-x-[30px] gap-y-[20px]">
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
