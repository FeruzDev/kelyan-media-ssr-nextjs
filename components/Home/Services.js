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
                                      <li>Анализ Целевой Аудитории</li>
                                      <li>Анализ конкурентов</li>
                                      <li>Создание уникального стиля</li>
                                      <li>Проработка контента: посты,
                                          текста и дизайн</li>
                                      <li>Настройка рекламного
                                          бюджета</li>
                                      <li>Реклама в социальных сетях,
                                          настройка рекламного
                                          бюджета</li>
                                      <hr/>

                                  </ul>
                               <div  >
                                   <Link href="/targetingova-reklama" ><a className="rounded-pill">Подробнее</a></Link>
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

                                <h4>Реальный Маркетинг</h4>
                                <ul>
                                    <li>Cотрудничество на несколько месяцев</li>
                                    <li>Cоздание сайта и проработка его уникального стиля</li>
                                    <li>SEO-оптимизация</li>
                                    <li>Реклама в СМИ</li>
                                    <li>Сотрудничество с блогерами</li>
                                    <li>Создание собственного логотипа и брендбука</li>
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
                                    <li>Cоздание собственного уникального стиля</li>
                                    <li>Cоздание логотипа / брендбука</li>
                                    <li>корректное использование логотипа</li>
                                    <li>правильный подбор цветовой гаммы</li>
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