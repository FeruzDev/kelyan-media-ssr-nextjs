import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
import ASOPr from "../../components/seo/ASOPr";
import Head from "next/head";
import SerContact from "../../components/Services/SerContact";

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
            <Head>
                <title>Продвижение мобильных приложений для Android и IOS от KelyanMedia  </title>
                <meta name="description" content=" Эффективное продвижение мобильный приложений в Play Market и App Store ✓  Закажите продвижение приложения в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги по ASO маркетингу

 "/>
            </Head>
            <Navbar />
            <div className="overflow-hidden">
                <img src="/img/seo/ASO.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="pl-5 pr-5 mt-5 text-center font-weight-bold mb-5 ">
           ASO оптимизация - процесс оптимизации <br/> приложения в Google Play Market, App Store</h3>
            <Trafic/>
            <Cases/>
            <ASOPr/>
            <SerContact/>

            <Footer/>
        </div>
    );
};

export default Seo;