import '../../App.css'
import HeroSection from '../HeroSection'
import React from 'react';
import Cards from '../Cards';
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Cards></Cards>
            <Footer></Footer>
        </div>
    );
};

export default Home;