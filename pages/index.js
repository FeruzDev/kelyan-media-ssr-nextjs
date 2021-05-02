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

const HomePage = (props) => {


  const [loading, setLoading]= useState(true);

  useEffect(()=>{

    setTimeout(()=>{
      setLoading(false)
    }, 3222000)
    AOS.init({
      once: true
    });





  }, [])


  return (
      <div className="overflow-hidden">


        {
          loading ?
              ( <Loader/>)
              :

              <>

                <Navbar history={props.history} />
                <Jumbotron />
                <SubHome/>
                <Services />
                <Benefits />
                <Cases />
                <Clients />

                <Footer /></>
        }



      </div>
  );
};

export default HomePage;