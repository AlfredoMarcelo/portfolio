import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Profile from "../components/Profile";
import CardProject from "../components/CardProject";
import Stack from "../components/Stack";

import "../views/HomeView.css"

function HomeView(){
    return(
        <div>
            <Navbar/>
            <Profile/>
            <About/>
            <Stack/>
            <CardProject/>
            <Footer/>
        </div>
    );
}

export default HomeView;