import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {isLoggedIn && <h2>Hi, {user.name}</h2>}
      {!isLoggedIn && <h2>Hi, user</h2>}
    </div>
  );
};

export default Home;
