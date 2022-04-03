import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "../LogInSignUp.css";
import { toast } from "react-toastify";

export function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const signUpError = () => toast.error("Invalid email or password", {
        position: "top-right",
        autoClose: 900,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    const passwordLengthError = () => toast.error("Password must be at least 8 characters", {
        position: "top-right",
        autoClose: 900,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    const passwordNoMatchError = () => toast.error("Passwords do not match", {
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
            navigate("/home");
        }

    }

    return (
        <div className="loginContainer">
            <form>
                <h1>Sign Up</h1>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="password" onChange={e => setConfirmPassword(e.target.value)} />
                </label>
                <div>
                    <label>Already have an account?</label>
                    <Link className="link" to="/login">Log In</Link>
                </div>
                <div>
                    <button className="button" type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}