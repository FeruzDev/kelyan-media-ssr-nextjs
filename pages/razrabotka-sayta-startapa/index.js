import React, {useEffect} from 'react';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cases from "../../components/Home/Cases";
import SerContact from "../../components/Services/SerContact";
import ProLanding from "../../components/banners/startup/proLanding";
import Offer from "../../components/create-landing/Offer";
import Technology from "../../components/create-landing/Technology";
import Order from "../../components/create-landing/Order";
import Accordion from "../../components/create-landing/Accordion";
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
                <title>Разработка сайта для стартапа: Заказать у веб-студии  KelyanMedia </title>
                <meta name="description" content="ᐅ  Разработка сайта для стартапа под ключ ✓ Создаем сайты на заказ, выгодные условия от ведущей студии Узбекистана.☆ Мы поможем недорого создать сайт для стартапа! "/>
            </Head>
            <Navbar history={props.history}/>
            <div className="overflow-hidden">
                <img src="/img/banners/startUp.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="newPagesTitle" > Наша команда поможет клиентам создавать сайты для стартапов различных бизнес-моделей </h3>

            <ProLanding />
            <Offer/>
            <Technology />
            <BannersCases/>
            <Order />
            <Accordion/>
            <SerContact />
            <Footer />

        </>
    );
};

export default CorpSite;