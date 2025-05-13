import { NavLink } from "react-router-dom";
import clsx from "clsx";

const setActiveClass = ({ isActive }) => clsx(isActive && "text-red-500");

const AuthNav = () => (
  <div className="flex gap-4 text-xl">
    <NavLink className={setActiveClass} to="/login">
      Login
    </NavLink>
    <NavLink className={setActiveClass} to="/register">
      Register
    </NavLink>
  </div>
);

export default AuthNav;
