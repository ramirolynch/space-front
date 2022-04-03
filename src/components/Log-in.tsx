import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "../LogInSignUp.css";
import { toast } from "react-toastify";


export function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginError = () => toast.error("Invalid email or password", {
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

        if (email.length === 0 && password.length > 8) {
            loginError();
            return;
        } else {
            navigate("/home");
        }
    }

    return (
        <div className="loginContainer">
            <form>
                <h1>Are you Ready to go to Mars!?</h1>
                <h2>Log In</h2>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>

                <div>
                    <label>Don't have an account?</label>
                    <Link className="link" to="/signup">Sign Up</Link>
                </div>


                <div>
                    <button className="button" type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}