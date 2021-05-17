import React, {Component} from 'react';
import AOS from "aos";

class Offers extends Component {

    componentDidMount() {
        AOS.init();

    }
    render() {

        return (
            <div className="Offers">
                <div className="container">
                    <h3  data-aos="fade-right"
                         data-aos-easing="linear"
                         data-aos-duration="1200"
                         className="styles_typicalWrapper__1_Uvh"
                    >ЧТО МЫ ПРЕДЛАГАЕМ?</h3>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200">

                                <div>
                                   <h3 className="numberBack">
                                       <img src="/img/icon/1.png" alt=""/>

                                   </h3>
                                    <h4>Публикации</h4>
                                </div>
                                <p>
                                    Мы исследуем ваш бизнес, анализируем нишу и конкурентность на рынке, выявляем самые
                                    рентабельные способы продвижения
                                </p>


                                <h1>1</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200"
                                 data-aos-delay="300">

                                <div>
                                     <h3 className="numberBack">
                                         <img src="/img/icon/2.png" alt=""/>

                                     </h3>
                                    <h4>Таргетированная реклама</h4>
                                </div>
                                <p>
                                    Исходя из анализа создаем бренд и разрабатываем все необходимые представительства в
                                    социальных сетях, включая продающий веб-сайт
                                </p>


                                <h1>2</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200"
                                 data-aos-delay="600">

                                <div>
                                    <h3 className="numberBack">
                                        <img src="/img/icon/3.png" alt=""/>

                                    </h3>
                                    <h4>Изучение конкурентов</h4>
                                </div>
                                <p>
                                    Вместе с вами мы составляем ваше УТП - уникальное торговое предложение и приводим вам
                                    первых клиентов с помощью стратегического интернет-маркетинга
                                </p>


                                <h1>3</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200">

                                <div>
                                    <h3 className="numberBack">
                                        <img src="/img/icon/4.png" alt=""/>

                                    </h3>
                                    <h4>Рекомендации по <br/> бизнеса улучшению<br/>
                                        аудитории</h4>
                                </div>
                                <p>
                                    Исследуя вашу нишу, мы проводим подробный анализ вашей аудитории, выявляя потенциальных
                                    клиентов - людей, на которых будет нацелена реклама вашего продукта.
                                </p>


                                <h1>4</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200"
                                 data-aos-delay="300">

                                <div>
                                     <h3 className="numberBack">
                                         <img src="/img/icon/5.png" alt=""/>

                                     </h3>
                                    <h4>Создание комьюнити <br/> для вашего бренда</h4>
                                </div>
                                <p>
                                    Одной из главных задач является объединение пользователей вокруг вашего продукта: мы
                                    доносим до аудитории ваши ценности и цели, впоследствии заполучая круг лояльных
                                    покупателей, который будет постоянно расширяться
                                </p>


                                <h1>5</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benCard"
                                 data-aos="fade-up"
                                 data-aos-easing="linear"
                                 data-aos-duration="1200"
                                 data-aos-delay="600">

                                <div>
                                     <h3 className="numberBack">
                                         <img src="/img/icon/6.png" alt=""/>

                                     </h3>
                                    <h4>Привлечения людей </h4>
                                </div>
                                <p>
                                    С помощью таргетированной рекламы и специальных техник продвижения мы знакомим
                                    большее количество людей с вашей нишей и увеличиваем поток клиентов
                                </p>


                                <h1>6</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Offers;