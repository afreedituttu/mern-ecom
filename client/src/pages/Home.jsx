import React from "react";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home(){
    return(<>
            <Announcment />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
    </>)
}

export default Home;