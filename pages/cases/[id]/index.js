import React from 'react';
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ConsultationApplication from "../../../components/Services/ConsultationApplication";
import CasesItem from "../../../components/CasesItem";


const CasesView = (props) => {
    return (
        <div>

            <Navbar history={props.history} />

            <CasesItem/>
            <ConsultationApplication/>
            <Footer />
        </div>
    );
};

export default CasesView;