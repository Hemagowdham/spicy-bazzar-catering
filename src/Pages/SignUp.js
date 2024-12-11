import { auth, db } from "../Config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {

    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleSignup = async (event) => {
        event.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, userMail, userPassword);
            auth.currentUser.displayName = userName;
            const user = auth.currentUser;
            console.log("User Details: ", user);
            if(user) {
                await setDoc(doc(db, "Users", user.uid), {
                    username : user.displayName,
                    email: user.email,
                })

                await setDoc(doc(db, "Cart", user.uid), {
                    username : user.displayName,
                    email: user.email,
                    cartDetails: [],
                })
            }
            console.log("User Registered Successfully!");
            toast.info("🧑‍🍳 Registered successfully, Your spicy adventure begins now!", {
                position: "bottom-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (error) {
            console.log(error.message);
            toast.error("Email Already In Use! 👀 ", {
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
        <div className="container signup" id="signup">
                <div className="row signup-card justify-content-center my-5">
                    <div className="col col-12 col-md-4">
                        <img src="/images/login-image.png" className="signup-image rounded-start" alt="Spicy bazzar signup" />
                    </div>
                    <div className="col col-12 col-md-8 px-5">
                        <h1 className="signup-heading my-4">Welcome to Spicy Bazzar!</h1>
                        <br />
                        <form onSubmit={handleSignup}>
                            <div className="form-floating mb-3">
                                <input type="name" className="form-control" id="username" placeholder="name@example.com" value={userName} onChange={(event)=>setUserName(event.target.value)} />
                                <label htmlFor="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" placeholder="name@example.com" value={userMail} onChange={(event)=>setUserMail(event.target.value)} />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" placeholder="Password" value={userPassword} onChange={(event) => setUserPassword(event.target.value)} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <br />
                            <button className="btn btn-primary py-2 px-4 signup-button" type="submit">Signup</button>
                            <ToastContainer />
                            <br />
                            <p className="signup-text my-5">Existing User? <Link to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
        </div>
    );
}