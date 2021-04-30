import React from 'react';
import Navbar from "../../components/Navbar";
import ServiceHeader from "../../components/Services/ServiceHeader";
import Services from "../../components/Home/Services";
import Posts from "../../components/Services/Posts";
import Footer from "../../components/Footer";
import Application from "../../components/Services/Application";

const ServicePage = (props) => {
    return (
        <>
            <Navbar history={props.history}/>
            <ServiceHeader />
            <Services/>
            <Posts/>
            <Application />
            <Footer/>
        </>
    );
};

export default ServicePage;