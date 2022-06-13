import React from "react";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Features from "../components/Home/Features";
import Main from "../components/Home/Main";
import Navigation from "../components/Layouts/Navigation";

function Home(){
    return (
        <div>
            <Navigation />
            <Main />
            <FeaturedProducts />
            <Features />
        </div>
    )
}

export default Home;