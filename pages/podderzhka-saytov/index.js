import React, {useEffect} from 'react';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cases from "../../components/Home/Cases";
import SerContact from "../../components/Services/SerContact";
import ProLanding from "../../components/banners/pod-site/proLanding";
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
        },  1000)


    }, [])

    return (
        <>
            <Head>
                <title> Поддержка сайта: Заказать обслуживание интернет сайта у студии  KelyanMedia </title>
                <meta name="description" content="ᐅ Поддержка Сайтов Клиентов ✓ Берем все на себя! Выгодные условия от ведущей студии Узбекистана.☆ Мы поможем поддерживать ваш сайт!"/>
            </Head>
            <Navbar history={props.history}/>
            <div className="overflow-hidden">
                <img src="/img/banners/podSite.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="newPagesTitle"> В первую очередь не обновление контента на сайте, а <br/> внедрение новых функций, доработка новых разделов сайта, <br/> оптимизация сайта</h3>

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