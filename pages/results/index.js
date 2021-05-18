import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
import ResultsPr from "../../components/seo/ResultsPr";
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
                <title>Заказать раскрутку сайта с оплатой за результат от KelyanMedia </title>
                <meta name="description" content="Гарантия на результат с продвижением за оплату результата ✓  Закажите продвижение сайта в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги по SEO"/>
            </Head>
            <Navbar />
            <div className="overflow-hidden">
                <img src="/img/seo/results.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="pl-5 pr-5 mt-5 text-center font-weight-bold mb-5 ">Продвинем ваш сайт в поисковиках гугл и яндекс с <br/> гарантией результата </h3>
            <Trafic/>
            <Cases/>
            <ResultsPr/>
            <Footer/>
        </div>
    );
};

export default Seo;