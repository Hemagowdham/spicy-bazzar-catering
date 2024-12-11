import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Reserve() {

    const [headCount, setHeadCount] = useState("");

    const handleReserve = (event) => {
        event.preventDefault();
        toast.info("🧑‍🍳 Reservation details Sent Successfully!", {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    return(
        <>
        <Header />
        <div className="container mt-5">
        <h4 className="my-4 order">Reseve now</h4>
        <h1 className="mb-4 reserve">Start Your Catering Reservation</h1>
        <form className="px-5 py-2" onSubmit={handleReserve}>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label for="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="First" required/>
                </div>
                <div className="col-md-6">
                    <label for="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Last" required/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" required/>
                </div>
                <div className="col-md-6">
                    <label for="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="xxx xxx xxxx" required/>
                </div>
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <textarea className="form-control" id="address" rows="3" placeholder="Enter your address"></textarea>
            </div>
            <div className="mb-3">
                <label for="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" placeholder="Enter your city" required/>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label for="reservationDate" className="form-label">Reservation Date</label>
                    <input type="date" className="form-control" id="reservationDate" required/>
                </div>
                <div className="col-md-6">
                    <label for="reservationTime" className="form-label">Reservation Time</label>
                    <input type="time" className="form-control" id="reservationTime" required/>
                </div>
            </div>
            <div className="mb-3">
                <label for="partySize" className="form-label">How many guests will be attending the event?</label>
                <input type="number" className="form-control" id="partySize" placeholder="Enter number" value={headCount} onChange={(event)=>setHeadCount(event.target.value)} required/>
            </div>
            <div className="mb-3">
                <label for="notes" className="form-label">Notes</label>
                <textarea className="form-control" id="notes" rows="3" placeholder="Add any special requests or notes here"></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{"width": "40%"}}>Send</button>
            </div>
            <ToastContainer />
        </form>
        </div>
        <Footer />
        </>
    );
}