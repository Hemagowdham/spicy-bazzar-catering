import FoodItem from "./FoodItem";
import { auth, db } from "../Config/firebase";
import { collection, getDocs,  query, where } from "firebase/firestore";
import React, { useState, useEffect } from 'react';

export default function Menu() {

    const [dayMeal, setDayMeal] = useState([]);

    const fetchFoodData = async () => {
        try {
            const collectionRef = collection(db, "FoodMenu");
    
            // Parallel queries for categories
            const [breakfastSnapshot, lunchSnapshot, dinnerSnapshot] = await Promise.all([
                getDocs(query(collectionRef, where("catgory", '==', "Breakfast"))),
                getDocs(query(collectionRef, where("catgory", '==', "Lunch"))),
                getDocs(query(collectionRef, where("catgory", '==', "Dinner")))
            ]);
    
            // Process results
            const breakfast = breakfastSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const lunch = lunchSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const dinner = dinnerSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
            console.log("Breakfast Items:", breakfast);
            console.log("Lunch Items:", lunch);
            console.log("Dinner Items:", dinner);
    
            // Set to state (combine data or separate based on requirement)

        } catch (error) {
            console.error("Error fetching food data:", error);
        }
    };
    

    useEffect(() => {
        fetchFoodData();
      }, []);    


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
                    
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <h1>Lunch</h1>
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <h1>Dinner</h1>
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}