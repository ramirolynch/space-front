import { Suspense, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../LogInSignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchPhoto, fetchUser, logIn } from "../services/SpaceTravelApi";
import { SpaceContext } from "../context/SpaceContext";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { PhotoOfDay } from "./PhotoOfDay";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  let navigate = useNavigate();
  const { loginUser, addFirstName, addLastName, addUserId } =
    useContext(SpaceContext);

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

      logIn(email, password)
        .then((response) => fetchUser(response.id))
        .then((data) => {
          addFirstName(data.first_name);
          addLastName(data.last_name);
          addUserId(data.id);
        })
        .catch((error) => console.log(error));

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
      <Suspense fallback={<h2>Loading Photo of the Day...</h2>}>
      <PhotoOfDay></PhotoOfDay>
      </Suspense>
      
      <form onSubmit={handleSubmit}>
        <h1>Are you Ready to go to Mars!?</h1>
        <label>
          <p>Email</p>
          <FaUser className="fauser"></FaUser>
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
          <FaLock className="falock"></FaLock>
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
            Login
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
