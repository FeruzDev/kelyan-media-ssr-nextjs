import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import SeoPr from "../../components/seo/SeoPr";

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
            <SeoHeader/>
            <h3 className="pl-5 pr-5 mt-5 text-center font-weight-bold mb-5 ">SEO продвижение - органический трафик <br/>
                вашего бизнеса</h3>
            <Trafic/>
            <Cases/>

            <SeoPr />

            <Footer/>
        </div>
    );
};

export default Seo;