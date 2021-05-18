import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
import PpsPr from "../../components/seo/PpsPr";
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
                <title>Заказать настройку и запуск контекстной рекламы для сайта в Ташкенте от KelyanMedia</title>
                <meta name="description" content="Запуск и настройка контекста в Узбекистане ✓  Заказать настройку контекстной рекламы в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги по PPC"/>
            </Head>
            <Navbar />
            <div className="overflow-hidden">
                <img src="/img/seo/pps.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="pl-5 pr-5 mt-5 text-center font-weight-bold mb-5 "> PPS контекстная реклама - точный и эффективный <br/> способ донести свой продукт до целевой аудитории</h3>
            <Trafic/>
            <Cases/>
               <PpsPr/>
            <Footer/>
        </div>
    );
};

export default Seo;