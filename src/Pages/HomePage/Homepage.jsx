// import React from 'react';
import FAQSection from './Hero/FAQSection';
import Hero from './Hero/Hero';
import PromotionSlider from './Hero/PromotionSlider';
import Testimonial from './Hero/Testimonial';

const Homepage = () => {
    return (
        <div>
            <div className='container mx-auto px-4 py-8'>

            <Hero />
            </div>
            <PromotionSlider />
            <Testimonial/>
            <FAQSection/>
        </div>
    );
};

export default Homepage;