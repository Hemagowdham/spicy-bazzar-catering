import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { auth, db } from "../Config/firebase";
import { doc, getDoc } from "firebase/firestore";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CartItem from '../Components/CartItem';

export default function Cart() {

    const [cartDetails, setCartDetails] = useState([]);

    const fetchCartDetails = async() => {
        auth.onAuthStateChanged(async (user) => {
            const docRef = doc(db, "Cart", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) { 
                console.log(docSnap.data());
                setCartDetails([...cartDetails,...docSnap.data().cartDetails]);
                console.log("cartdetails fetch success",cartDetails);

            }
        });
    };

    useEffect(() => {
        fetchCartDetails();
    }, []);

    return(
        <>
        <Header />
        {cartDetails.length>0 ?
        <div className="container">
            <h4 className="my-4 order">Food cart</h4>
            <h1 className="mb-4 reserve">Food Cart Details</h1>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Order Summary</h5>
                    <br />
                    <h6 className="card-subtitle mb-2 text-body-secondary">Order: ₹{cartDetails.reduce((acc, item) => (acc + parseInt(item.price.slice(1)) ), 0)}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Packaging: ₹20</h6>
                    <br/>
                    <h5 className="card-title">Total: ₹{cartDetails.reduce((acc, item) => (acc + parseInt(item.price.slice(1)) ), 20)}</h5>
                    <Link to="/dashboard/reserveandorder" className="btn btn-primary">Reserve now</Link>
                </div>
                <div className="card-footer text-body-secondary">Updated now</div>
            </div>
            <br />
            <br />
            
            {cartDetails.map((item, index) =>
                <CartItem key={index} item={item}/>
            )}
        </div>:
        <div className='container'>
            <h4 className="my-4 order">Food cart</h4>
            <h1 className="mb-4 reserve">😿 Oops! Your Food Cart is Empty</h1>
        </div>
        }
        <Footer />
        </>
    );
}