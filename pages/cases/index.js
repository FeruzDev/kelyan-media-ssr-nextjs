import React, {useEffect} from 'react';
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

import CasesHeader from "../../components/Cases/CasesHeader";
import CasesPair from "../../components/Cases/CasesPair";

const CasesPage = (props) => {



    useEffect(()=>{

        setTimeout(()=>{
            document.getElementById("desVid").style.display = "none"
            document.getElementById("mobVid").style.display = "none"
            document.getElementById("kotLoader").style.display = "none"
        }, 3000)


    }, [])
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