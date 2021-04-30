import React, {Component} from 'react';
import AOS from "aos";

class LogoCases extends Component {
    componentDidMount() {
        AOS.init({
            duration: 700,
            delay: 50,
            once: true,
        })

    }

    render() {
        return (
            <div className="LogoCases">
                <div className="container">
                    <h2 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        >Наше портфолио</h2>
                    <h3 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"

                        data-aos-delay="300"

                        className="styles_typicalWrapper__1_Uvh"
                    >КЕЙСЫ</h3>


                    <div className="row mb-5">
                        <div className="col-6">

                            <img src="/img/service/adav 3.png"
                                 data-aos="fade-right"
                                 data-aos-easing="linear"
                                 data-aos-duration="1000"
                                 alt=""/>
                        </div>
                        <div className="col-6">
                            <h1 data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                >ADAV Jewelry</h1>
                            <p data-aos="fade-left"
                               data-aos-easing="linear"
                               data-aos-duration="1000"

                               data-aos-delay="300">Компания по продаже украшений из бриллиантов и драгоценных камней </p>

                        </div>


                        <div className="col-6">
                            <h1 data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                >Eco Decor</h1>
                            <p data-aos="fade-right"
                               data-aos-easing="linear"
                               data-aos-duration="1000"

                               data-aos-delay="300">Компания по вертикальному озеленению </p>

                        </div>
                        <div className="col-6">

                            <img data-aos="fade-left"
                                 data-aos-easing="linear"
                                 data-aos-duration="1000"

                                 src="/img/service/adav 4.png" alt=""/>
                        </div>


                        <div  className="col-6">

                            <img
                                 data-aos="fade-right"
                                 data-aos-easing="linear"
                                 data-aos-duration="1000"
                                 src="/img/service/adav 5.png"
                                 alt=""/>
                        </div>
                        <div className="col-6">
                            <h1 data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1000"

                            >UJS Investment</h1>
                            <p data-aos="fade-left"
                               data-aos-easing="linear"
                               data-aos-duration="1000"

                               data-aos-delay="300">Трейдинговая компания </p>

                        </div>


                        <div className="col-6">
                            <h1 data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1000"

                            >Tierra mebel</h1>
                            <p data-aos="fade-right"
                               data-aos-easing="linear"
                               data-aos-duration="1000"

                               data-aos-delay="300">Эксклюзивная мебель на заказ</p>

                        </div>
                        <div className="col-6">

                            <img data-aos="fade-left"
                                 data-aos-easing="linear"
                                 data-aos-duration="1000"

                                 src="/img/service/adav 6.png" alt=""/>
                        </div>


                        <div  className="col-6">

                            <img
                                  data-aos="fade-right"
                                  data-aos-easing="linear"
                                  data-aos-duration="1000"

                                  src="/img/service/adav 7.png" alt=""/>
                        </div>
                        <div className="col-6">

                            <p data-aos="fade-left"
                               data-aos-easing="linear"
                               data-aos-duration="1000"

                               data-aos-delay="300" >Гайдлайн для строительной компании </p>

                        </div>


                    </div>


                    <h3
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className="ml-auto mr-auto styles_typicalWrapper__1_Uvh"
                        style={{"margin-top": "100px"}}>
                        Давайте вместе разработаем лого
                    </h3>
                    <p
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className="ml-auto mr-auto text-white text-center  mt-4 ml-5 mr-5 mb-5"
                         >Разработка логотипа занимает от 3 до 5 рабочих дней
                        Разработка брендбука от 5 до 10 рабочих дней
                        Для начала работы с вас требуется заполнение брифа и небольшие комментарии и предпочтения</p>
                </div>



            </div>
        );
    }
}

export default LogoCases;