import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
import SeoOptPr from "../../components/seo/SeoOptPr";

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
                <img src="/img/seo/seoOpt.jpg" className="w-100" alt=""/>
            </div>
            <Trafic/>
            <Cases/>
            <SeoOptPr/>
            <Footer/>
        </div>
    );
};

export default Seo;