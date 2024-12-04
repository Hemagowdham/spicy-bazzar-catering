import React, { useState } from 'react';

export default function SignUp() {

    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleSignup = () => {
        alert(`${userName} ${userMail} and ${userPassword}`);
    };

    return(
        <div className="container signup">
            <div className="card mx-auto pe-5 signup-card">
                <div className="row">
                    <div className="col">
                        <img src="/images/login-image.png" className="signup-image rounded-start" alt="Spicy bazzar signup" />
                    </div>
                    <div className="col">
                        <h1 className="signup-heading mt-2">Sign Up</h1>
                        <br />
                        <form onSubmit={handleSignup}>
                            <div className="form-floating mb-3">
                                <input type="name" className="form-control" id="floatingInput" placeholder="user" value={userName} onChange={(event)=>setUserName(event.target.value)} />
                                <label for="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={userMail} onChange={(event)=>setUserMail(event.target.value)} />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={userPassword} onChange={(event) => setUserPassword(event.target.value)} />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <br />
                            <button className="btn btn-primary py-2 px-4 signup-button">SignUp</button>

                            <br />
                            <p className="signup-text my-4">Existing user? <a href="#">Login</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}