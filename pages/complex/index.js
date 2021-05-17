import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
import ComplexPr from "../../components/seo/ComplexPr";

const Seo = () => {



    useEffect(()=>{

        setTimeout(()=>{
            document.getElementById("desVid").style.display = "none"
            document.getElementById("mobVid").style.display = "none"
            document.getElementById("kotLoader").style.display = "none"
        }, 3000)


    }, [])

    return (
        <div>
            <Navbar />
            <div className="overflow-hidden">
                <img src="/img/seo/complex.jpg" className="w-100" alt=""/>
            </div>
            <Trafic/>
            <Cases/>
            <ComplexPr/>
            <Footer/>
        </div>
    );
};

export default Seo;