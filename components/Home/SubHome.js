import React, {Component} from 'react';

class SubHome extends Component {
    render() {
        return (
            <div>
                <div  className="container subHome">
                    <h2 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        Почему  стоит обратиться к нам?
                    </h2>
                    <h3 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                        className="styles_typicalWrapper__1_Uvh"
                    >
                        Ключевые аспекты продвижения
                    </h3>

                    <ul>
                        <li data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"

                        >
                            <div></div>
                            Выбор социальной сети с наибольшим процентом целевой аудитории бренда
                        </li>
                        <li data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                        >
                            <div></div>
                            Анализ деятельности конкурентов и разработка контент-плана
                        </li >
                        <li data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                        >
                            <div></div>
                            Анализ реакции аудитории за счет лайков, комментариев и просмотров
                        </li>
                        <li data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="900"
                        >
                            <div></div>
                            Разработка интерактивов: конкурсов, акций и программы лояльности
                        </li>
                        <li data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            data-aos-delay="1200"
                        >
                            <div></div>
                            Составление ежемесячного отчета, анализ ошибок и их исправление
                        </li>
                    </ul>



                </div>

            </div>
        );
    }
}

export default SubHome;