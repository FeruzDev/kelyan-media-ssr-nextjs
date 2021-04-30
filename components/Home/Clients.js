import React, {Component} from 'react';
import Slider from "react-slick";

import Link from "next/link";
import AOS from "aos";

class Clients extends Component {


    constructor(props) {
        super(props);
        this.state = {
            minutes: 25,
            seconds: 0,
        }
    }




    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000);

        AOS.init();

    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }




    render() {
        const { minutes, seconds } = this.state
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false

        };

        return (
            <div className="Clients pb-5">
                <div className="container">
                    <h2 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        Кто нам доверяет?
                    </h2>
                    <h3 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className="styles_typicalWrapper__1_Uvh"
                    >
                        КЛИЕНТЫ
                    </h3>


                        <Slider {...settings} >
                            <div className="carouselItem">
                                <img src="/img/progress.png" alt=""/>
                            </div>
                            <div className="carouselItem">
                                <img src="/img/dasita.svg" alt=""/>
                            </div>
                            <div className="carouselItem">
                                <img src="/img/paradise.svg" alt=""/>
                            </div>
                            <div className="carouselItem">
                                <img src="/img/thomas.svg" alt=""/>
                            </div>

                        </Slider>




                    <h3 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"

                        className="  mr-auto ml-auto "
                        className="styles_typicalWrapper__1_Uvh"

                    >
                        Вы дочитали наше предложение?
                    </h3>
                    <p data-aos="fade-up"
                       data-aos-easing="linear"
                       data-aos-duration="1000">
                        Значит, можете самостоятельно убедиться в нашем навыке раскрывать продукт перед целевой
                        аудиторией!

                    </p>
                    <p data-aos="fade-up"
                       data-aos-easing="linear"
                       data-aos-duration="1000"

                       data-aos-delay="300"
                    >
                        Оставьте свои контактные данные, обсудим ваш проект и начнем готовить концепции, чтобы донести
                        суть вашего предложения в дизайне
                    </p>

                    <div className="row">
                        <div className="col-md-6"

                             data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-duration="1000"

                        >

                            <div className="row justify-content-center mb-5">
                                <div className="hour">
                                    <div />
                                    <h1>
                                        {minutes}
                                    </h1>
                                </div>


                                <h6>
                                    :
                                </h6>

                                <div className="hour">
                                    <div />
                                    <h1>
                                        {seconds < 10 ? `0${seconds}` : seconds}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center"

                             data-aos="fade-left"
                             data-aos-easing="linear"
                             data-aos-duration="1000">

                            <p className="mb-5">
                                Оставьте заявку на бесплатный разбор вашего бизнеса
                            </p>
                            <Link href="#">
                                Оставить заявку
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Clients;