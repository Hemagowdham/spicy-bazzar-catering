import { auth } from "../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const [userMail, setUserMail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleLogin = async (event) => {

        event.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, userMail, userPassword);
            console.log("User logged in successfully");
            toast.info("🧑‍🍳 Login successful, Let's spice things up!", {
                position: "bottom-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            window.location.href = "/dashboard";
        } catch(error) {
            console.log(error.message);
            toast.error("User login failed", {
                position: "bottom-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        
    };

    return(
        <div className="container login" id="login">
                <div className="row login-card justify-content-center my-5">
                    <div className="col col-12 col-md-4">
                        <img src="/images/login-image.png" className="login-image rounded-start" alt="Spicy bazzar login" />
                    </div>
                    <div className="col col-12 col-md-8 px-5">
                        <h1 className="login-heading my-4">Welcome back!</h1>
                        <br />
                        <form onSubmit={handleLogin}>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="usermailid" placeholder="name@example.com" value={userMail} onChange={(event)=>setUserMail(event.target.value)} />
                                <label htmlFor="usermailid">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="userpasswordid" placeholder="Password" value={userPassword} onChange={(event) => setUserPassword(event.target.value)} />
                                <label htmlFor="userpasswordid">Password</label>
                            </div>

                            <br />
                            <button className="btn btn-primary py-2 px-4 login-button">Login</button>
                            <ToastContainer />
                            <br />
                            <p className="login-text my-5">New to Spicy Bazzar? <Link to="/signup">SignUp</Link></p>
                        </form>
                    </div>
                </div>
        </div>
    );
}