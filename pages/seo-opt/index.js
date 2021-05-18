import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
import SeoOptPr from "../../components/seo/SeoOptPr";
import Head from "next/dist/next-server/lib/head";

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
                <title>Заказать SEO оптимизацию сайта в Ташкенте от студии KelyanMedia </title>
                <meta name="description" content="Правильная СЕО оптимизация в Узбекистане ✓  Закажите оптимизацию сайта в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги по оптимизации"/>
            </Head>
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