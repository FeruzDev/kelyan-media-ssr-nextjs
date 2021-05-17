import React, {Component} from 'react';
import App from "../App";
import AOS from "aos";
import Typical from "react-typical"
import Link from "next/link";
class Jumbotron extends Component {

componentDidMount() {
    AOS.init();

}

    render() {



        return (
            <div className="Jumbotron  ">
             <div>

                 <App/>
                 <div className="container ">
                     <img src="/img/icon/3ugl.png" className="rightCorner"alt=""/>

                     <div className="row">
                       <div className="col-md-8">
                           <div className="col-md-4">

                               {/* eslint-disable-next-line react/jsx-no-undef */}
                               <Typical
                                   steps={['KELYANMEDIA', 1000, 'Маркетинговая Digital Компания', 500]}
                                   loop={Infinity}
                                   wrapper="h1"
                               />

                           </div>
                           <div className="col-md-12">
                               <p data-aos="fade-up"
                                  data-aos-easing="linear"
                                  data-aos-duration="1000">
                                   Возвышаем ваш бизнес на новый уровень и повышаем  продажи
                               </p>
                           </div>
                       </div>


                       <div className="col-md-4 jumButton">


                           <a className="rounded-pill " href="#subHome">Подробнее</a>
                           {/*<a  className="rounded-pill  " >Оставить заявку</a>*/}
                           <div className="rounded-pill  "> <a className="rounded-pill" href="#request">Оставить заявку</a> </div>
                       </div>

                   </div>

                     <img src="/img/reaceta.png" className="racetaDes" alt=""/>

                     <img src="/img/icon/3ugl2.png" className="leftCorner"alt=""/>

                 </div>
             </div>



            </div>

        );
    }
}

export default Jumbotron;