import React, {Component} from 'react';
import AOS from "aos";
import Typical from "react-typical";

class Company extends Component {
    componentDidMount() {
        AOS.init();

    }

    render() {
        return (
            <div className="Company">
                <div className="row">
                    <div className="col-6"
                         data-aos="fade-right"
                         data-aos-easing="linear"
                         data-aos-duration="1000">

                        <Typical
                            steps={[' Метод работы', 1000]}
                            loop={1}
                            wrapper="h3"
                        />

                        <p>
                            Каждое действие сверяется с рабочей проработанной методологией, дающей нужные результаты
                        </p>


                    </div>
                    <div className="col-6">
                        <img data-aos="fade-left"
                             data-aos-easing="linear"
                             data-aos-duration="1000"
                             src="/img/reb1.png" alt=""/>
                    </div>


                    <div className="col-6">
                        <img src="/img/reb2.png"
                             data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-duration="1500" alt=""/>
                    </div>
                    <div className="col-6" data-aos="fade-left"
                         data-aos-easing="linear"
                         data-aos-duration="1000">

                        <Typical
                            steps={['  История компании', 1000]}
                            loop={1}
                            wrapper="h3"
                        />

                        <p>Рекламное агентство появилось летом 2020 года и каждый день становится больше, набирая
                            обороты, увеличивая комьюнити в социальных сетях и достигая все более амбициозных целей</p>
                    </div>


                    <div className="col-6" data-aos="fade-right"
                         data-aos-easing="linear"
                         data-aos-duration="1000">
                        <Typical
                            steps={[' Наша команда', 1000]}
                            loop={1}
                            wrapper="h3"
                        />

                        <p>Наша команда состоит из опытных специалистов: каждый знает свое дело и готов вкладываться в
                            проекты на все 100%</p>
                    </div>
                    <div className="col-6">
                        <img src="/img/reb3.png"
                             data-aos="fade-left"
                             data-aos-easing="linear"
                             data-aos-duration="1000"
                             alt=""/>
                    </div>

                </div>


                <div className="ourTeam">
                    <div className="container">
                        <h2 data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >Кто с вами будет работать?</h2>
                        <h3 data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            data-aos-delay="500"
                            className="styles_typicalWrapper__1_Uvh"

                        >НАША КОМАНДА</h3>


                        <div className="ourList">
                            <div className="ourTeamCard ">
                                <img
                                    className="w-100"
                                    src="/img/ourTeam1.png" alt=""/>
                                <h1
                                >Алтыбаев Руслан</h1>
                                <span>Дизайнер</span>
                            </div>


                            <div className="ourTeamCard ">
                                <img

                                    className="w-100"
                                    src="/img/ourTeam2.png" alt=""/>
                                <h1>Агаси Аракелян </h1>
                                <span>Маркетолог</span>
                            </div>

                            <div className="ourTeamCard ">
                                <img

                                    className="w-100"
                                    src="/img/ourTeam3.png"
                                    alt=""/>
                                <h1>Данил Лапин </h1>
                                <span>Арт директор</span>
                            </div>


                            <div className="ourTeamCard ">
                                <img

                                    className="w-100"
                                    src="/img/ourTeam4.png"
                                    alt=""/>
                                <h1>Хусан Мадамбеков </h1>
                                <span>Дизайнер</span>
                            </div>


                            <div className="ourTeamCard ">
                                <img
                                    className="w-100"

                                    src="/img/ourTeam5.png"
                                    alt=""/>
                                <h1>Хашимова Севара </h1>
                                <span>Копирайтер</span>
                            </div>


                            <div className="ourTeamCard ">
                                <img className="w-100"
                                     src="/img/ourTeam6.png"
                                     alt=""/>
                                <h1>Алина Осипова</h1>
                                <span>Аккаунт менеджер</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Company;