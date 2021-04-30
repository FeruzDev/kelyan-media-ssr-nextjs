import React from 'react';
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

import CasesHeader from "../../components/Cases/CasesHeader";
import CasesPair from "../../components/Cases/CasesPair";

const CasesPage = (props) => {
    return (
        <>
            <Navbar history={props.history}/>
            <CasesHeader  />
            <CasesPair />
            <Footer/>
        </>
    );
};

export default CasesPage;