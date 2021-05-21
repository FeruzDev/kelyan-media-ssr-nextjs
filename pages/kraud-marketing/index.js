import React, {useEffect} from 'react';
import SeoHeader from "../../components/seo/SeoHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Trafic from "../../components/seo/Trafic";
import Cases from "../../components/Home/Cases";
import Promoting from "../../components/seo/Promoting";
import Discuss from "../../components/seo/Discuss";
import CraudPr from "../../components/seo/CraudPr";
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
                <title>Услуги крауд-маркетинга: Заказать и купить крауд ссылки для сайта в студии — KelyanMedia</title>
                <meta name="description" content="Дешевый крауд маркетинг для вашего сайта ✓  Закажите крауд-ссылки в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги по круад-маркетингу
"/>
            </Head>
            <Navbar />
            <div className="overflow-hidden">
                <img src="/img/seo/craud.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="pl-5 pr-5 mt-5 text-center font-weight-bold mb-5 ">Увеличение трафика потенциальных потребителей <br/>
            для вашего бизнеса </h3>
            <Trafic/>
            <Cases/>
            <CraudPr/>
            <SerContact/>

            <Footer/>
        </div>
    );
};

export default Seo;