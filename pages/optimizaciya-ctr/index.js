import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
import CtrPr from "../../components/seo/CtrPr";
import Head from "next/dist/next-server/lib/head";
import SerContact from "../../components/Services/SerContact";

const Seo = () => {



    useEffect(()=>{

        setTimeout(()=>{
            document.getElementById("desVid").style.display = "none"
            document.getElementById("mobVid").style.display = "none"
            document.getElementById("kotLoader").style.display = "none"
        },  1000)


    }, [])

    return (
        <div>
            <Head>
                <title>Заказать увеличение кликабельности сайта в поиске от KelyanMedia </title>
                <meta name="description" content="ᐅ Мощное повышение кликаьельности вашего сайта ✓  Закажите оптимизацию CTR в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги по CTR"/>
            </Head>
            <Navbar />
            <div className="overflow-hidden">
                <img src="/img/seo/ctr.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="pl-5 pr-5 mt-5 text-center font-weight-bold mb-5 ">
                CTR - метрика, которая дает понимание, насколько <br/> точно вы таргетируете рекламу
            </h3>
            <Trafic/>
            <Cases/>
            <CtrPr/>
            <SerContact/>

            <Footer/>
        </div>
    );
};

export default Seo;