import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
import ComplexPr from "../../components/seo/ComplexPr";
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
                <title>Заказать комплексное продвижение сайта в поиске в Ташкенте</title>
                <meta name="description" content="Полное SEO продвижение вашего сайта в Узбекистане ✓  Закажите комплексное продвижение сайта в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги SEO"/>
            </Head>
            <Navbar />
            <div className="overflow-hidden">
                <img src="/img/seo/complex.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="pl-5 pr-5 mt-5 text-center font-weight-bold mb-5 "> CRO - процесс непрерывного тестирования элементов <br/> веб-сайта для увеличения количества конверсий</h3>
            <Trafic/>
            <Cases/>
            <ComplexPr/>
            <Footer/>
        </div>
    );
};

export default Seo;