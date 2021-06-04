import React, {useEffect} from 'react';
import Navbar from "../../components/Navbar";
import ServiceHeader from "../../components/Services/ServiceHeader";
import Services from "../../components/Home/Services";
import Posts from "../../components/Services/Posts";
import Footer from "../../components/Footer";
import Application from "../../components/Services/Application";

const ServicePage = (props) => {
    useEffect(()=>{

        setTimeout(()=>{
            document.getElementById("desVid").style.display = "none"
            document.getElementById("mobVid").style.display = "none"
            document.getElementById("kotLoader").style.display = "none"
        }, 1)


    }, [])



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