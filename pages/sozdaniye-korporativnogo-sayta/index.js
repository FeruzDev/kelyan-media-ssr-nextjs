import React, {useEffect} from 'react';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cases from "../../components/Home/Cases";
import SerContact from "../../components/Services/SerContact";
import ProLanding from "../../components/banners/corp-site/proLanding";
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
        }, 1000)


    }, [])

    return (
        <>
            <Head>
                <title> Создание корпоративного сайта компании в Ташкенте от   </title>
                <meta name="description" content="ᐅ Разработка Корпоративного Сайта под ключ ✓ Создаем сайты на заказ, выгодные условия от ведущей студии Узбекистана.☆ Мы поможем недорого создать корпоративный сайт  "/>
            </Head>
            <Navbar history={props.history}/>
            <div className="overflow-hidden">
                <img src="/img/banners/CorpSite.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="newPagesTitle">Ваша визитная карточка и полноценное  представительство компании в интернете</h3>

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