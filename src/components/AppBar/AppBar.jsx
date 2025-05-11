import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && "text-red-500");
};
const AppBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      {isLoggedIn && <h2>{user.name}</h2>}
      <nav className="flex gap-3">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={setActiveClass} to="/login">
              Login
            </NavLink>
            <NavLink className={setActiveClass} to="/register">
              Registration
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button
            onClick={() => dispatch(logoutThunk())}
            className="btn btn-secondary"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default AppBar;
