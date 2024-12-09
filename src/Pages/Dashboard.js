import React, { useState } from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import { auth, db } from "../Config/firebase";
import { getDoc, doc } from "firebase/firestore";

export default function Dashboard() {

    const [userName, setUsername] = useState("");

    return(
        <div>
            <Header userName={userName}/>
            <Menu />
            <Footer />
        </div>
    );
}