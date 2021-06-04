import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
import Head from "next/dist/next-server/lib/head";
import SerContact from "../../components/Services/SerContact";
import TextPr from "../../components/seo/TextPr";

const Seo = () => {



    useEffect(()=>{

        setTimeout(()=>{
            document.getElementById("desVid").style.display = "none"
            document.getElementById("mobVid").style.display = "none"
            document.getElementById("kotLoader").style.display = "none"
        }, 1)


    }, [])

    return (
        <div>
            <Head>
                <title>Заказать услуги копирайтинга для сайта. Написание текстов в Узбекистане от KelyanMedia</title>
                <meta name="description" content="ᐅ Качественные тексты от лучших копирайтеров Узбекистана ✓  Закажите копирайтинг в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги по написанию текстов"/>
            </Head>
            <Navbar />
            <div className="overflow-hidden">
                <img src="/img/seo/text.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="pl-5 pr-5 mt-5 text-center font-weight-bold mb-5 "> Написание текстов — рерайт, копирайтинг, продающие тексты <br/>
            для сайтов</h3>
            <Trafic/>
            <Cases/>
           <TextPr/>

            <SerContact/>

            <Footer/>
        </div>
    );
};

export default Seo;