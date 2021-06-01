import React, {useEffect} from 'react';
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

import CasesPair from "../../components/Cases/CasesPair";

const CasesPage = (props) => {



    useEffect(()=>{

        setTimeout(()=>{
            document.getElementById("desVid").style.display = "none"
            document.getElementById("mobVid").style.display = "none"
            document.getElementById("kotLoader").style.display = "none"
        },  1000)


    }, [])
    return (
        <>
            <Navbar history={props.history}/>
            {/*<CasesHeader  />*/}
            <div className="overflow-hidden">
                <img src="/img/service/cases.png" className="w-100" alt=""/>
            </div>

            <CasesPair />
            <Footer/>
        </>
    );
};

export default CasesPage;