import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Number:
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
