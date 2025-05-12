import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/contacts");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="text-3xl">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            {isLoggedIn ? (
              <h2 className="mb-5 text-5xl font-bold">
                Hi, {user.name}! We wish you a good work.
              </h2>
            ) : (
              <h2 className="mb-5 text-5xl font-bold">
                Hi, user. Please login
              </h2>
            )}
            <button className="btn btn-primary" onClick={handleClick}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
