import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../LogInSignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logIn } from "../services/SpaceTravelApi";
import { SpaceContext } from "../context/SpaceContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  let navigate = useNavigate();
  const { loginUser } = useContext(SpaceContext);

  const loginError = () =>
    toast.error("Invalid email or password", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  function handleSubmit(e: any) {
    e.preventDefault();

    if (email.length === 0 || password.length === 0) {
      loginError();
      return;
    } else {
      let formData = new FormData(e.currentTarget);

      let email: string = formData.get("email") as string;
      let password: string = formData.get("password") as string;

      // checked for logged users
      logIn(email, password)
        .then((response) => {
          if (response.email !== email) {
            return;
          }
          loginUser();
          navigate("/getTripDetails");
        })
        .catch((error) => {
          loginError();
          console.log(error);
        });
    }
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <h1 className="login">Log In</h1>
        <h1>Are you Ready to go to Mars!?</h1>
        <label>
          <p>Email</p>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <i className="faEye" onClick={togglePasswordVisiblity}>
          {passwordShown ? <FaEye /> : <FaEyeSlash />}
        </i>

        <div>
          <label className="dontHaveAcc">Don't have an account?</label>
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </div>

        <div>
          <button className="submit" type="submit">
            Submit
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
