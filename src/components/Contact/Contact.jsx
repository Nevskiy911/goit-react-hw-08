import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaPhone, FaUser } from "react-icons/fa";

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between border border-white rounded-md p-3 w-[400px]">
      <div className="flex flex-col">
        <p className="flex items-center mb-1">
          <FaUser className="mr-2" />
          {contact.name}
        </p>
        <p className="flex items-center">
          <FaPhone className="mr-2 -scale-x-100" />
          {contact.number}
        </p>
      </div>
      <button
        className="ml-5 h-[50px] w-[150px] bg-red-500 hover:bg-red-600 text-white font-semibold rounded"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
