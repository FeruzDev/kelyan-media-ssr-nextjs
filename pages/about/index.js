import React, {useEffect}from 'react';
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

import Company from "../../components/Company/Company";
import CompanyHeader from "../../components/Company/CompanyHeader";
import AOS from "aos";

const CompanyPage = (props) => {



    useEffect(()=>{

        setTimeout(()=>{
            document.getElementById("desVid").style.display = "none"
            document.getElementById("mobVid").style.display = "none"
            document.getElementById("kotLoader").style.display = "none"
        },  1000)
        AOS.init({
            once: true
        });





    }, [])

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