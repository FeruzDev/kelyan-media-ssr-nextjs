import React, {Component} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from "react-typical"

class Smm extends Component {

    componentDidMount() {
        AOS.init({
            once: true
        });

    }

    render() {
        return (
            <div className="Smm">
                <div className="container text-center">
                    <h3  data-aos="fade-up"
                         data-aos-easing="linear"
                         data-aos-duration="1200"
                         className="styles_typicalWrapper__1_Uvh"
                    >Показатели нашей работы в социальных сетях</h3>


                    <div className="row">

                        <div className="salCards" data-aos="zoom-in"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                             data-aos-delay="400">
                            <h1>34</h1>
                            <p>компании с которыми мы работали</p>
                        </div>



                        <div className="salCards"
                             data-aos="zoom-in"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                            >
                            <p>Привели</p>
                            <h1>7490</h1>
                            <p>лидов</p>
                        </div>

                        <div className="salCards"
                             data-aos="zoom-in"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                             data-aos-delay="400"
                       >
                            <p>Потрачено более</p>
                            <h1>$22 000</h1>
                            <p>рекламного бюджета</p>
                        </div>


                    </div>


                    <h3   data-aos="flip-up"
                          data-aos-easing="linear"
                          data-aos-duration="1200"
                          className="styles_typicalWrapper__1_Uvh"
                    >Что вы получите от смм продвижения?</h3>

                    <div className="row" style={{"flex-wrap" : "wrap !important"}}>
                        <div className="salary">
                            <img data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200"
                                 src="/img/s1.svg" alt=""/>
                            <p data-aos="fade-up"
                               data-aos-easing="linear"
                               data-aos-duration="1200"
                               data-aos-delay="200"

                            > Увеличение <br/> доходов вашей <br/> компании</p>
                        </div>
                        <div className="salary">
                            <img data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200"
                                 src="/img/s2.svg" alt=""/>
                            <p data-aos="fade-up"
                               data-aos-easing="linear"
                               data-aos-duration="1200"
                               data-aos-delay="200"
                            >Повышение <br/> узнаваемости <br/> вашего бренда</p>
                        </div>
                        <div className="salary">
                            <img data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200"
                                 src="/img/s3.svg" alt=""/>
                            <p data-aos="fade-up"
                               data-aos-easing="linear"
                               data-aos-duration="1200"
                               data-aos-delay="200"
                            >Определение целевой <br/> аудитории, которая будет <br/> следить за вашей компанией</p>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Smm;