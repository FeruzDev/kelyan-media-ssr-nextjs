import React from 'react';
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

import Company from "../../components/Company/Company";
import MarcetingHeader from "../../components/Services/MarcetingHeader";
import Marceting from "../../components/Services/Marceting";
import Application from "../../components/Services/Application";
import Cooperation from "../../components/Services/Cooperation";
import Cases from "../../components/Home/Cases";
import SerContact from "../../components/Services/SerContact";

const CompanyPage = (props) => {
    return (

        <>
            <Navbar history={props.history}/>
            <MarcetingHeader />


            <Marceting/>


            <Application />

            <Cooperation/>
            <Cases/>
            <SerContact/>
            <Footer/>
        </>
    );
};

export default CompanyPage;