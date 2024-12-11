import {NavLink} from 'react-router-dom';
import { auth } from "../Config/firebase";
import { signOut } from "firebase/auth";

export default function Header() {

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
                <NavLink to="/dashboard" className="navbar-brand p-0">
                    <img src='/images/logo-black-bg1.png' alt='logo' height="64px" width="240px"/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <NavLink to="/dashboard" className="nav-item nav-link" activeStyle={{ color: "white"}}>Dashboard</NavLink>
                        <NavLink to="/dashboard/menu" className="nav-item nav-link" activeStyle={{ color: "white"}}>Menu</NavLink>
                        <NavLink to="/dashboard/foodcart" className="nav-item nav-link" activeStyle={{ color: "white"}}>Food Cart</NavLink>
                        <NavLink to="/dashboard/reserveandorder" className="nav-item nav-link" activeStyle={{ color: "white"}}>Reserve</NavLink>
                        <NavLink to="/dashboard/contact" className="nav-item nav-link" activeStyle={{ color: "white"}}>Contact</NavLink>
                    </div>
                    <button className="btn btn-primary py-2 px-4 me-2" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
        </>
    );
}