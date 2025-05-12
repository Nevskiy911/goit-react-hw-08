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
    <div className="flex-col lg:flex-row-reverse mt-10 ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0  border-2 border-white p-4 hover:border-gray-400 transition-colors">
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
              className="input validator tabular-nums"
              required
              placeholder="Number"
              pattern="[0-9]*"
              minlength="4"
              maxlength="10"
              title="Must be min 4 and max 10 digits"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <p className="validator-hint">Must be min 4 and max 10 digits</p>
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
