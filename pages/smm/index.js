import React from 'react';
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

import SmmHeader from "../../components/Services/SmmHeader";
import Smm from "../../components/Services/Smm";
import Cases from "../../components/Home/Cases";
import Offers from "../../components/Services/Offers";
import Application from "../../components/Services/Application";

const SmmPage = (props) => {
    return (
        <>
            <Navbar history={props.history}/>
            <SmmHeader   />

            <Smm />

            <Cases />
            <Offers />
            <Application/>
            <Footer/>
        </>
    );
};

export default SmmPage;