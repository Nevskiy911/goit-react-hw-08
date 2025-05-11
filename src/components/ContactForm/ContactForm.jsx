import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

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
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset" onSubmit={handleSubmit}>
            <label className="label">Name:</label>
            <input
              type="name"
              className="input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="label">Number:</label>
            <input
              type="number"
              className="input"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <input />
            <button className="btn btn-neutral mt-4" type="submit">
              Add contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
