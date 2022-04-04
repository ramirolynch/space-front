import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../LogInSignUp.css";
import { toast } from "react-toastify";
import { signUp } from "../services/SpaceTravelApi";
import { SpaceContext } from "../context/SpaceContext";

export function SignUp() {
    const {addUser} = useContext(SpaceContext)
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
    const navigate = useNavigate();

  const signUpError = () =>
    toast.error("Invalid email or password", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const passwordLengthError = () =>
    toast.error("Password must be at least 8 characters", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const passwordNoMatchError = () =>
    toast.error("Passwords do not match", {
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

    if (email.length === 0 && password.length === 0) {
      signUpError();
      return;
    } else if (password.length < 8 && confirmPassword.length < 8) {
      passwordLengthError();
    } else if (password !== confirmPassword) {
      passwordNoMatchError();
    } else {

        let formData = new FormData(e.currentTarget)
        let first_name :string = formData.get('first_name') as string;
        let last_name: string = formData.get('last_name') as string;
        let email: string = formData.get('email') as string;
        let password :string = formData.get('password') as string;
        signUp(first_name, last_name, email, password).then(newuser => addUser(newuser));
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')

        navigate("/getTripDetails");
        
    }
  }

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
              <h1>Sign Up</h1>
              <label>
          <p>First Name</p>
                  <input type="text" name='first_name' id ='first_name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </label>
              <label>
          <p>Last Name</p>
                  <input type="text" name='last_name' id ='last_name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          <p>Email</p>
                  <input type="text" name='email' id ='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password" name='password' id ='password' value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>Confirm Password</p>
          <input
            type="password" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <div>
          <label>Already have an account?</label>
          <Link className="link" to="/login">
            Log In
          </Link>
        </div>
        <div>
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
