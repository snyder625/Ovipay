import React from "react";
import HeroSection from "./HeroSection";
import PopularProducts from "./PopularProducts";
import Header from "./Header";
import Footer from "./Footer";

const Index = () => {
    return (
        <div className="relative h-full">
            <Header />

            <HeroSection />
            <PopularProducts />

            <div className="mb-[140px]"></div>

            <Footer />
        </div>
    );
};

export default Index;
