import React from 'react';
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

import Company from "../../components/Company/Company";
import CompanyHeader from "../../components/Company/CompanyHeader";

const CompanyPage = (props) => {
    return (
        <>
            <Navbar history={props.history}/>
            <CompanyHeader   />
            <Company />
            <Footer/>
        </>
    );
};

export default CompanyPage;