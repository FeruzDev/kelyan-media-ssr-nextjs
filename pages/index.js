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

const HomePage = (props) => {


  const [loading, setLoading]= useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 4000)
  }, [])
  console.log(props)
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