import React, {Component} from 'react';
import AOS from "aos";
import Link from "next/link";

class Services extends Component {



    componentDidMount() {
        AOS.init();

    }

    render() {
        return (
            <div className="Services">

                <div className="container">
                    <h2>Что мы можем вам предложить</h2>
                    <h3
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className="styles_typicalWrapper__1_Uvh"

                    >УСЛУГИ</h3>

                    <div className="row">
                        <div className="col-md-4"
                             data-aos="flip-left"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="1500">
                            <div className="serCard">


                                <img src="/img/rec1.png" alt="img..."/>

                                  <h4>SMM</h4>
                                  <ul>
                                      <li>Создание уникального стиля</li>
                                      <li>Аналитика конкурентов</li>
                                      <li>Точное определение аудитории</li>
                                      <li>Проработка сильных сторон</li>
                                      <li>Реклама в соц сетях</li>
                                      <hr/>

                                  </ul>
                               <div  >
                                   <Link href="/smm" ><a className="rounded-pill">Подробнее</a></Link>
                               </div>
                            </div>
                        </div>



                        <div className="col-md-4"
                             data-aos="flip-up"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="1500"
                        >
                            <div className="serCard">


                                <img src="/img/rec2.png" alt="img..."/>

                                <h4>Брендинг</h4>
                                <ul>
                                    <li>Создание уникального стиля</li>
                                    <li>Аналитика конкурентов</li>
                                    <li>Точное определение аудитории</li>
                                    <li>Проработка сильных сторон</li>
                                    <li>Реклама в соц сетях</li>
                                    <hr/>

                                </ul>
                                <div  >
                                    <Link href="/marceting" ><a className="rounded-pill">Подробнее</a></Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4"
                             data-aos="flip-right"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="1500">
                            <div className="serCard">


                                <img src="/img/rece.png" alt="img..."/>

                                <h4>Упаковка</h4>
                                <ul>
                                    <li>Создание уникального стиля</li>
                                    <li>Аналитика конкурентов</li>
                                    <li>Точное определение аудитории</li>
                                    <li>Проработка сильных сторон</li>
                                    <li>Реклама в соц сетях</li>
                                    <hr/>

                                </ul>
                                <div  >
                                    <Link href="/logo-page" ><a className="rounded-pill">Подробнее</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Services;