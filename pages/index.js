import React, {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Home/Jumbotron";
import Services from "../components/Home/Services";
import Benefits from "../components/Home/Benefits";
import Cases from "../components/Home/Cases";
import Clients from "../components/Home/Clients";
import Footer from "../components/Footer";
import SubHome from "../components/Home/SubHome";
import Loader from "../components/Loader";
import AOS from "aos";
import 'aos/dist/aos.css';
import Head from "next/dist/next-server/lib/head";

const HomePage = (props) => {

    const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{

    setTimeout(()=>{
      document.getElementById("desVid").style.display = "none"
      document.getElementById("mobVid").style.display = "none"
      document.getElementById("kotLoader").style.display = "none"
        setIsLoading(false);
    }, 3500)
    AOS.init({
      once: true
    });





  }, [])


  return !isLoading ?
    <div className="overflow-hidden">
        <Head>
            <title>Создание сайта, продвижение сайтов и приложений, разработка в Ташкенте от агенства KelyanMedia</title>
            <meta name="description" content="ᐅ Качественное создание и продвижение сайтов в Ташкенте от веб студии 【KelyanMedia】. Разработка веб сайтов любой сложности ✓ Проекты готовы к продвижению... "/>
        </Head>
        <Navbar history={props.history} />
        <Jumbotron />
        <SubHome/>
        <Services />
        <Benefits />
        <Cases />
        <Clients />
        <Footer />
    </div> : ""


  ;
};

export default HomePage;