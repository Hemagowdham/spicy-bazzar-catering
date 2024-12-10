import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {Link} from 'react-router-dom';

export default function Cart() {
    return(
        <>
        <Header />
        <div className="container">
            <h4 className="my-4 order">Food cart</h4>
            <h1 className="mb-4 reserve">Food Cart Details</h1>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Order Summary</h5>
                    <br />
                    <h6 className="card-subtitle mb-2 text-body-secondary">Order: ₹200</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Delivery: ₹200</h6>
                    <br/>
                    <h5 className="card-title">Total: ₹1000</h5>
                    <Link to="/reserve" className="btn btn-primary">Reserve now</Link>
                </div>
                <div className="card-footer text-body-secondary">Updated now</div>
            </div>
            <br />
            <br />
            
            <div className="col-lg-6 ms-5">
            <div className="d-flex align-items-center">
                <img className="flex-shrink-0 img-fluid rounded" src="images/puttu.jpeg" alt="" style={{"width": "200px", "height": "140px"}} />
                <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>Puttu</span>
                        <span className="text-primary">₹200</span>
                    </h5>
                    <small className="fst-italic">Traditional South Indian dish made from steamed rice flour and grated coconut, served with curry or sugar.</small>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </>
    );
}