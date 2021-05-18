import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
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
                <title>Заказать оптимизацию конверсии сайта (CRO) недорого в Ташкенте</title>
                <meta name="description" content="Повышение продаж вашего сайта ✓  Закажите оптимизацию коэффициента конверсии в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги по CRO"/>
            </Head>
            <Navbar />
            <div className="overflow-hidden">
                <img src="/img/seo/conversi.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="pl-5 pr-5 mt-5 text-center font-weight-bold mb-5 ">CRO - процесс непрерывного тестирования элементов <br/> веб-сайта для увеличения количества конверсий </h3>
            <Trafic/>
            <Cases/>


            <Footer/>
        </div>
    );
};

export default Seo;