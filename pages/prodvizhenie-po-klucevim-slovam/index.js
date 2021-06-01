import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
import TextPr from "../../components/seo/TextPr";
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
                <title>Заказать продвижение сайта по ключевым словам в Ташкенте - KelyanMedia </title>
                <meta name="description" content="ᐅ Продвижение сайта по нужным ключевым словам в Google и Yandex ✓  Закажите продвижение сайта в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги по SEO"/>
            </Head>
            <Navbar />
            <div className="overflow-hidden">
                <img src="/img/seo/kewywords.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="pl-5 pr-5 mt-5 text-center font-weight-bold mb-5 ">
            Грамотная оптимизация и успешное продвижение <br/> сайта по ключевым словам
            </h3>
            <Trafic/>
            <Cases/>

            <TextPr/>
            <SerContact/>

            <Footer/>
        </div>
    );
};

export default Seo;