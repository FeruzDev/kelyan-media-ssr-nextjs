import React, {useEffect} from 'react';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cases from "../../components/Home/Cases";
import SerContact from "../../components/Services/SerContact";
import ProLanding from "../../components/create-landing/proLanding";
import Offer from "../../components/create-landing/Offer";
import Technology from "../../components/create-landing/Technology";
import Order from "../../components/create-landing/Order";
import Accordion from "../../components/create-landing/Accordion";
import BannersCases from "../../components/create-landing/BannersCases";
import Head from "next/dist/next-server/lib/head";
const CreateLending = (props    ) => {



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
                <title>Создание сайта в Ташкенте, разработка сайта от студии   </title>
                <meta name="description" content="Разработка сайтов под ключ в Узбекистане от судии 【KelyanMedia】 Создаем сайты на заказ в Ташкенте, выгодные условия. Мы поможем  создать продающий web-сайт!"/>
            </Head>
            <Navbar history={props.history}/>
            <div className="overflow-hidden">
                <img src="/img/service/createLanding.jpg" className="w-100" alt=""/>
            </div>
            <h3 className="newPagesTitle">Создадим лендинг с нуля по индивидуальному   заказу с учётом потребностей вашего бизнеса</h3>
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

export default CreateLending;