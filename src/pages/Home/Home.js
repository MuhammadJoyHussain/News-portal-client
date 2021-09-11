import React from 'react';
import Banner from '../../components/home/Banner';
import TopNews from './../../components/home/TopNews';
import Bangladesh from './../../components/home/Bangladesh';
import Footer from './../../components/common/Footer';

const Home = () => {
    return (
        <div style={{marginTop:"100px"}}>
            <Banner />
            <TopNews />
            <Bangladesh />
            <Footer />
        </div>
    );
};

export default Home;