import React, {Component} from 'react';
import App from "../App";
import AOS from "aos";
import Typical from "react-typical"
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
                     <div className="col-md-4">

                         {/* eslint-disable-next-line react/jsx-no-undef */}
                         <Typical
                             steps={['KELYANMEDIA', 1000, 'Маркетинговая Digital Компания', 500]}
                             loop={Infinity}
                             wrapper="h1"
                         />

                     </div>
                     <div className="col-md-8">
                         <p data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                             Возвышаем ваш бизнес на новый уровень и повышаем  продажи
                         </p>
                     </div>

                     <img

                          src="/img/reaceta.png" alt=""/>
                 </div>
             </div>



            </div>

        );
    }
}

export default Jumbotron;