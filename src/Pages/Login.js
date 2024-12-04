import React, { useState } from 'react';

export default function Login() {

    const [userMail, setUserMail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleLogin = () => {
        alert(`${userMail} and ${userPassword}`);
    };

    return(
        <div className="container login">
            <div className="card mx-auto pe-5 login-card">
                <div className="row">
                    <div className="col">
                        <img src="/images/login-image.png" className="login-image rounded-start" alt="Spicy bazzar login" />
                    </div>
                    <div className="col">
                        <h1 className="login-heading mt-2">Welcome back!</h1>
                        <br />
                        <form onSubmit={handleLogin}>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={userMail} onChange={(event)=>setUserMail(event.target.value)} />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={userPassword} onChange={(event) => setUserPassword(event.target.value)} />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <br />
                            <button className="btn btn-primary py-2 px-4 login-button">Login</button>

                            <br />
                            <p className="login-text my-4">New to Spicy Bazzar? <a href="#">SignUp</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}