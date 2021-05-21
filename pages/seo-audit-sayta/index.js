import React, {useEffect} from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import AuditPr from "../../components/seo/AuditPr";
import Head from "next/dist/next-server/lib/head";
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
                <title>Заказать полный аудит сайта: SEO аудит, анализ сайта в Узбекистане - KelyanMedia </title>
                <meta name="description" content="Комплексный Аудит вашего сайта ✓  Закажите полный аудит сайта в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги по аудиту

"/>
            </Head>
            <Navbar />
            <div className="overflow-hidden">
                <img src="/img/seo/audit.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="pl-5 pr-5 mt-5 text-center font-weight-bold mb-5 ">  Всесторонняя проверка сайта и аудит - первый шаг <br/>
            на пути к успешной SEO оптимизации
            </h3>
            <Trafic/>
            <Cases/>
            <AuditPr />
            <SerContact/>

            <Footer/>
        </div>
    );
};

export default Seo;