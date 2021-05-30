import React, {useEffect} from 'react';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cases from "../../components/Home/Cases";
import SerContact from "../../components/Services/SerContact";
import Offer from "../../components/create-landing/Offer";
import Technology from "../../components/create-landing/Technology";
import Order from "../../components/create-landing/Order";
import Accordion from "../../components/create-landing/Accordion";
import ProLanding from "../../components/banners/comp-site/proLanding";
import BannersCases from "../../components/create-landing/BannersCases";
import Head from "next/dist/next-server/lib/head";
const CorpSite = (props    ) => {



    useEffect(()=>{

        setTimeout(()=>{
            document.getElementById("desVid").style.display = "none"
            document.getElementById("mobVid").style.display = "none"
            document.getElementById("kotLoader").style.display = "none"
        }, 3000)


    }, [])

    return (
        <>
            <Head>
                <title> Заказать создание сайта для компании в Ташкенте от  </title>
                <meta name="description" content="ᐅ   Разработка сайтов для Компаний под ключ ✓ Создаем сайты на заказ, выгодные условия от ведущей студии Узбекистана.☆ Мы поможем недорого создать сайт компании"/>
            </Head>
            <Navbar history={props.history}/>
            <div className="overflow-hidden">
                <img src="/img/banners/CompSite.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="  newPagesTitle" >Весь спектр услуг от разработки сайта <br/>до запуска рекламной компании</h3>

            <ProLanding />
            <Offer/>
            <Technology />
            <BannersCases />
            <Order />
            <Accordion/>
            <SerContact />
            <Footer />

        </>
    );
};

export default CorpSite;