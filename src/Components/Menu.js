import FoodItem from "./FoodItem";
import { auth, db } from "../Config/firebase";
import { collection, getDocs,  query, where } from "firebase/firestore";
import React, { useState, useEffect } from 'react';

export default function Menu() {

    const [breakfastArray, setBreakfastArray] = useState([]);
    const [lunchArray, setLunchArray] = useState([]);
    const [dinnerArray, setDinnerArray] = useState([]);

    const fetchFoodData = async () => {
        try {
            const collectionRef = collection(db, "FoodMenu");
    
            // Parallel queries for categories
            const [breakfastSnapshot, lunchSnapshot, dinnerSnapshot] = await Promise.all([
                getDocs(query(collectionRef, where("catgory", '==', "Breakfast"))),
                getDocs(query(collectionRef, where("catgory", '==', "Lunch"))),
                getDocs(query(collectionRef, where("catgory", '==', "Dinner")))
            ]);
    
            console.log("MUST: ", breakfastSnapshot);
            // Process results
            const breakfast = breakfastSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const lunch = lunchSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const dinner = dinnerSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
            //console.log("Breakfast Items:", breakfast);
            //console.log("Lunch Items:", lunch);
            //console.log("Dinner Items:", dinner);
    
            setBreakfastArray(breakfast);
            setLunchArray(lunch);
            setDinnerArray(dinner);

            //console.log(breakfastArray,"\n",lunchArray,"\n",dinnerArray);
            
        } catch (error) {
            console.error("Error fetching food data:", error);
        }
    };

    useEffect(() => {
        fetchFoodData();
      }, []);    

    const handleClick = (name) => {
       const itemIndex = dinnerArray.findIndex((doc)=> doc.name === name)
       if(dinnerArray[itemIndex].isAdded) {
        dinnerArray[itemIndex].isAdded = false;
       } else {
        dinnerArray[itemIndex].isAdded = true;
       }
       console.log(breakfastArray);
    }

    return(
        <>
        <div className="container-xxl py-5" id="menuSection">
            <div className="container menu">
                <div className="text-center">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                <i className="fas fa-mug-hot fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Popular</small>
                                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                <i className="fas fa-drumstick-bite fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Special</small>
                                    <h6 className="mt-n1 mb-0">Lunch</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                <i className="fa fa-utensils fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Lovely</small>
                                    <h6 className="mt-n1 mb-0">Dinner</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <h1>Breakfast</h1>
                                {breakfastArray.map((doc, index) => (
                                    <div key={index} className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={doc.image} alt="" style={{"width": "200px", "height": "140px"}} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>{doc.name}</span>
                                                <span className="text-primary">{doc.price}</span>
                                                </h5>
                                                <small className="fst-italic">{doc.description}</small>
                                                <button className="btn btn-primary py-1 px-2 me-2 mt-2" style={{"width": "80px"}}>ADD +</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <h1>Lunch</h1>
                                {lunchArray.map((doc, index) => (
                                    <div key={index} className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={doc.image} alt="" style={{"width": "200px", "height": "140px"}} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>{doc.name}</span>
                                                <span className="text-primary">{doc.price}</span>
                                                </h5>
                                                <small className="fst-italic">{doc.description}</small>
                                                <button className="btn btn-primary py-1 px-2 me-2 mt-2" style={{"width": "80px"}}>ADD +</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <h1>Dinner</h1>
                                {dinnerArray.map((doc, index) => (
                                    <div key={index} className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src={doc.image} alt="" style={{"width": "200px", "height": "140px"}} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>{doc.name}</span>
                                                <span className="text-primary">{doc.price}</span>
                                                </h5>
                                                <small className="fst-italic">{doc.description}</small>
                                                <button className="btn btn-primary py-1 px-2 me-2 mt-2" style={{"width": "80px"}} onClick={handleClick(doc.name)}>{doc.isAdded? "ADDED": "ADD +"}</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}