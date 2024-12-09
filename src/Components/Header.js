import {Link} from 'react-router-dom';
import { auth } from "../Config/firebase";
import { signOut } from "firebase/auth";

export default function Header({userName}) {

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out successfully!");
            window.location.href = "/";
        } catch(error) {
            console.log(error.message);
        }
    }

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <Link to="/dashboard" className="navbar-brand p-0">
                    <img src='/images/logo-black-bg1.png' alt='logo' height="64px" width="240px"/>
                </Link>
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
                    <button className="btn btn-primary py-2 px-4 me-2" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
        </>
    );
}