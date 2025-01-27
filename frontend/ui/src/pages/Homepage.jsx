import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import About from "../components/About";
import Activities from "../components/Activities";
import Counter from "../components/Counter";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Feedbackform from "../components/Feedbackform";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";




function Homepage(){
    return(
        <>
        <Navbar/>
        <Slider/>
        <About/>
        <Activities/>
        <Counter/>
        <Gallery></Gallery>
        <Pricing/>
        <Feedbackform/>
        <Testimonials/>
       
        <Footer/>
        </>
    )
}

export default Homepage;