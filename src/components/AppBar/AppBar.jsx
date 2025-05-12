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
      <div class="flex justify-center items-center">
        {isLoggedIn && <h2>{user.name}</h2>}
      </div>
      <nav className="flex justify-between text-2xl mt-5 mb-3">
        <div className="flex gap-3">
          <NavLink className={setActiveClass} to="/">
            Home
          </NavLink>
          <NavLink className={setActiveClass} to="/contacts">
            Contacts
          </NavLink>
        </div>
        <div className="flex gap-3">
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
        </div>

        {isLoggedIn && (
          <div>
            <button
              onClick={() => dispatch(logoutThunk())}
              className="btn btn-secondary"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default AppBar;
