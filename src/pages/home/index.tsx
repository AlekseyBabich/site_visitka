import React from 'react';
import {HomePage} from "../../components/pages/HomePage";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <HomePage/>
            <Footer/>
        </div>
    );
};

export default Home