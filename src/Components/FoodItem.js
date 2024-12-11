import React, { useState } from "react";
import { auth, db } from "../Config/firebase";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";

export default function FoodItem({food, cartItems, setCartItems}) {

    const [isAdded, setIsAdded] = useState(false);

    //Add Food items to Cart database
    const addToDatabase = async (newObject) => {
        auth.onAuthStateChanged(async(user) => {
            const docRef = doc(db, "Cart", user.uid);
            await updateDoc(docRef, {
                cartDetails: arrayUnion(newObject)
            });

            console.log("Object added to cartDetails field");
        });
    }

    const addToCart = () => {
      const itemExist = cartItems.find((item) => item._uid === food.id);
      if (itemExist) {

      } else {
        const newItem = {
            _uid: food.id,
            name: food.name,
            category: food.catgory,
            description: food.description,
            price: food.price,
            image: food.image,
            isAdded: true
        };
        console.log("Cart Items", newItem);
        setCartItems([...cartItems, newItem]);
        console.log("Cart Items Added", cartItems);
        addToDatabase(newItem);
      }
    };

    const removeFromCart = () => {
        const itemExist = cartItems.find((item) => item._uid === food.id);
      if (itemExist) {
        const itemIndex = cartItems.findIndex((item) => item._uid === food.id);
        cartItems.splice(itemIndex, 1);
        console.log("Cart Items Removed", cartItems);
      }
    };

    const handleClick = () => {
        if(!isAdded) {
            setIsAdded(true);
            addToCart();
            alert("🌶️ Added successfully, view Food Cart");
        } 
    }

    return(
        <div className="col-lg-6">
            <div className="d-flex align-items-center">
                <img className="flex-shrink-0 img-fluid rounded" src={food.image} alt="" style={{"width": "200px", "height": "140px"}} />
                <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>{food.name}</span>
                        <span className="text-primary">{food.price}</span>
                    </h5>
                    <small className="fst-italic">{food.description}</small>
                    <button className="btn btn-primary py-1 px-2 me-2 mt-2" style={{"width": "80px"}} onClick={handleClick}>{isAdded? "Added": "ADD +"}</button>
                </div>
            </div>
        </div>
    );
}