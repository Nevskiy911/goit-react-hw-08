import { NavLink } from "react-router-dom";
import clsx from "clsx";

const setActiveClass = ({ isActive }) => clsx(isActive && "text-red-500");

const Navigation = () => (
  <div className="flex gap-4 text-xl">
    <NavLink className={setActiveClass} to="/">
      Home
    </NavLink>
    <NavLink className={setActiveClass} to="/contacts">
      Contacts
    </NavLink>
  </div>
);

export default Navigation;
