import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    // toast.error("You already logged in, but this info is not for you!");
    return <Navigate to={redirectTo} />;
  }
  return component;
};

export default RestrictedRoute;
