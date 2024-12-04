export default function Header() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Spicy Bazzar</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <a href="#heroSection" className="nav-item nav-link active">Home</a>
                        <a href="#aboutSection" className="nav-item nav-link">About</a>
                        <a href="#menuSection" className="nav-item nav-link">Menu</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="booking.html" className="dropdown-item">Booking</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="" className="btn btn-primary py-2 px-4 me-2">Login</a>
                    <a href="" className="btn btn-primary py-2 px-4 me-2">SignUp</a>
                </div>
            </nav>
        </>
    );
}