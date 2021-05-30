import React, {useEffect} from 'react';
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

import SmmHeader from "../../components/Services/SmmHeader";
import Smm from "../../components/Services/Smm";
import Cases from "../../components/Home/Cases";
import Offers from "../../components/Services/Offers";
import Application from "../../components/Services/Application";
import Head from "next/dist/next-server/lib/head";

const SmmPage = (props) => {

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
                <title>Заказать SMM продвижение в социальных сетях в Facebook, Instagram в Ташкенте</title>
                <meta name="description" content="ᐅ Запуск рекламы Instagram и Facebook в Узбекистане ✓  Заказать настройку таргетинговой рекламы в Ташкенте от студии 【KelyanMedia】 ☆ Комплексные услуги по SMM маркетингу"/>
            </Head>
            <Navbar history={props.history}/>
            <SmmHeader   />

            <Smm />

            <Cases />
            <Offers />
            <Application/>
            <Footer/>
        </>
    );
};

export default SmmPage;