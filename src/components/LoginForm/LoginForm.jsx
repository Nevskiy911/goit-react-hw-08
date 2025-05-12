import { Form, Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const resultAction = await dispatch(loginThunk(values));
      if (loginThunk.rejected.match(resultAction)) {
        toast.error("Login failed: " + resultAction.payload);
      } else {
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Unexpected error during login.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            We strive to create a convenient tool and are constantly developing
            our products. We wish you a pleasant experience.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <Field
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div className="mt-5">
                    <Link to="/register" className="link link-hover text-lg">
                      Do you have own account? Sign UP!
                    </Link>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Login
                  </button>
                </fieldset>
              </Form>
            </Formik>
            <div className="divider divider-ghost"></div>
            <Link className="text-lg text-center" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
