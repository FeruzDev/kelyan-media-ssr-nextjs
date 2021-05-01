import React, {Component} from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';

import Typical from "react-typical"
class LogoMarceting extends Component {

    componentDidMount() {
        AOS.init();

    }
    render() {
        return (
            <div className="Marceting">


                <div className="container">

                    <div className="row">
                        <div className="col-6">
                            <h3 data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                className="styles_typicalWrapper__1_Uvh"
                            >
                                Уникальный логотип
                            </h3>
                            <p data-aos="fade-right"
                               data-aos-easing="linear"
                               data-aos-duration="1000"
                               data-aos-delay="300"
                            >
                                Важно не только то насколько красивый у вас логотип. Большую роль играет сочетание
                                смыслов которые несёт ваша компания, визуального посыла и включающих в него атрибутов
                                различия
                            </p>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-center p-4">
                            <img src="/img/service/123.png"className="mt-5 w-100" alt="no img..."/>
                        </div>


                        <div className="col-6 d-flex align-items-center justify-content-center p-5">
                            <img src="/img/service/122.png"className="mt-2 w-100" alt="no img..."/>
                        </div>
                        <div className="col-6 d-flex   justify-content-center flex-column">
                            <h3 data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                className="styles_typicalWrapper__1_Uvh"

                            >
                                Гармоничный гайдлайн
                            </h3>
                            <p data-aos="fade-left"
                               data-aos-easing="linear"
                               data-aos-duration="1000"

                               data-aos-delay="300">
                                То как используются цвета и расположение ключевых элементов в вашей компании зависит его
                                узнаваемость и ценность.
                            </p>
                        </div>

                    </div>

                </div>



            </div>
        );
    }
}

export default LogoMarceting;