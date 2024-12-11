export default function HomeContact() {
    return(
        <>
            <div className="container signup" id="contactsection">
                <div className="row signup-card justify-content-center my-5">
                    <div className="col col-12 col-md-4">
                        <img src="/images/contact.png" className="signup-image rounded-start" alt="Spicy bazzar signup" />
                    </div>
                    <div className="col col-12 col-md-8 px-5">
                        <h1 className="signup-heading my-4">Contact Us</h1>
                        <br />
                        <form>
                            <div className="form-floating mb-3">
                              <input type="name" className="form-control" id="username" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="name" className="form-control" placeholder="Reserve bulk order for event" />
                                <label htmlFor="floatingInput">Subject</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Enter your here" id="floatingTextarea" rows="5"></textarea>
                                <label htmlFor="floatingTextarea">Message</label>
                            </div>
                            <button className="btn btn-primary py-2 px-4 signup-button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}