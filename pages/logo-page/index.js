import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import LogoMarceting from "../../components/Services/LogoMarceting";
import LogoHeader from "../../components/Services/LogoHeader";
import LogoCases from "../../components/Services/LogoCases";
import Application from "../../components/Services/Application";
import AOS from "aos";

const LogoPage = (props) => {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 700,
    //         delay: 50,
    //         once: true,
    //     })
    //
    // })


    return (
        <>
            <Navbar history={props.history}/>
            <LogoHeader  />
            <LogoMarceting/>
            <LogoCases/>
            <Application/>
            <img src="/img/w2.png" className="w2Bottom mt-5 pt-5" alt=""/>
            <Footer/>
        </>
    );
};

export default LogoPage;