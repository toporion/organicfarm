import React from 'react';
import Banner from '../../components/Banner';
import InfoSection from '../../components/InfoSection';
import Stat from '../../components/Stat';
import Services from '../../components/Services';
import WhyChooseUs from '../../components/WhyChooseUs';
import Products from '../../components/Products';
import Testimonial from '../../components/Testimonial';
import Team from '../../components/Team';
import BlogCompo from '../../components/BlogCompo';

const Home = () => {
    return (
        <div>
            <Banner/>
            <InfoSection/>
            <Stat/>
            <Services/>
            <WhyChooseUs/>
            <Products/>
            <Testimonial/>
            <Team/>
            <BlogCompo/>
        </div>
    );
};

export default Home;