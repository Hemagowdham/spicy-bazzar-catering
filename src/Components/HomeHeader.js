import {Link} from 'react-router-dom';

export default function HomeHeader() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <Link href="/" className="navbar-brand p-0">
                    <img src='/images/logo-black-bg1.png' alt='logo' height="64px" width="240px"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <a href="#heroSection" className="nav-item nav-link active">Home</a>
                        <a href="#aboutSection" className="nav-item nav-link">About</a>
                        <a href="#menuSection" className="nav-item nav-link">Menu</a>
                        <a href="#contactsection" className="nav-item nav-link">Contact</a>
                    </div>
                    <Link to="/login" className="btn btn-primary py-2 px-4 me-2">Login</Link>
                    <Link to="/signup" className="btn btn-primary py-2 px-4 me-2">SignUp</Link>
                </div>
            </nav>
        </>
    );
}