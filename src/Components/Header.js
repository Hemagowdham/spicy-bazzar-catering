import {Link} from 'react-router-dom';

export default function Header() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0 logo-text"><i className="fa fa-utensils me-3"></i>Spicy Bazzar</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to="/dashboard" className="nav-item nav-link active">Menu</Link>
                        <Link to="/foodcart" className="nav-item nav-link">Food Cart</Link>
                        <Link to="/reserveandorder" className="nav-item nav-link">Reserve</Link>
                        {/*<div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Review</a>
                            <div className="dropdown-menu m-0">
                                <a href="booking.html" className="dropdown-item">Booking</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>*/}
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="/" className="btn btn-primary py-2 px-4 me-2">Logout</Link>
                </div>
            </nav>
        </>
    );
}