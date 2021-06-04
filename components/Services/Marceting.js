import React, {Component} from 'react';


class Marceting extends Component {
    render() {
        return (
            <div className="Marceting">

                <div className="container">
                    <h3 className="text-center styles_typicalWrapper__1_Uvh ml-auto mr-auto">Что вы получите от
                        реального маркетинга ?</h3>
                    <div className="row">
                        <div className="col-6">
                            <h3 className="styles_typicalWrapper__1_Uvh"
                            >
                                Маркетинговый отдел
                            </h3>
                            <p>
                                Сотрудничая с нами вы получаете целую команду специалистов которая будет заниматься
                                продвижением и позиционированием вашего бренда на рынке
                            </p>
                        </div>

                        <div className="col-6 d-flex align-items-center justify-content-center p-4">
                            <img src="/img/service/125.png" className="mt-5 w-100" alt="no img..."/>
                        </div>


                        <div className="col-6 d-flex align-items-center justify-content-center p-4 ">
                            <img src="/img/service/124.png" className="mt-5 w-100" alt="no img..."/>
                        </div>
                        <div className="col-6">
                            <h3 className="styles_typicalWrapper__1_Uvh">
                                Комплексный подход
                            </h3>
                            <p>
                                Вы не просто получаете продвижение в интернете, а полный пакет услуг благодаря которым с
                                самых разных каналов трафика вы будете получать заявки и клиентов
                            </p>
                        </div>

                    </div>


                    <h3 className="styles_typicalWrapper__1_Uvh">
                        Что входит в реальный маркетинг?
                    </h3>
                    <div className="row serviceAll">

                        <div className="col-4">
                            <img src="/img/service/q1(1).svg" alt=""/>
                            <h1>СММ продвижение</h1>
                            <p>
                                Составим индивидуальные стратегии продвижения для каждого бизнеса
                            </p>
                        </div>

                        <div className="col-4">
                            <img src="/img/service/q1(9).svg" alt=""/>
                            <h1>Таргетированная реклама</h1>
                            <p>Вашу рекламу увидят именно ваши потенциальные клиенты</p>
                        </div>

                        <div className="col-4">
                            <img src="/img/service/q1(8).svg" alt=""/>
                            <h1>Создание сайтов</h1>
                            <p>
                                Разработаем сайты любой сложности, начиная с бюджетных, заканчивая самыми мощными
                            </p>
                        </div>

                        <div className="col-6 text-center">
                            <img src="/img/service/q1(7).svg" alt=""/>
                            <h1 className="mb-0">SEO</h1>
                            <p>
                                Повысим ваш сайт до лидирующих позиций в поисковых системах
                            </p>
                        </div>


                        <div className="col-6 text-center">
                            <img src="/img/service/q1(5).svg" alt=""/>
                            <h1>Реклама в СМИ</h1>
                            <p>Используем лучшие инструменты продвижения в рекламных компаниях</p>
                        </div>

                        <div className="col-4">
                            <img src="/img/service/q1(4).svg" alt=""/>
                            <h1>Банерная реклама</h1>
                            <p>
                                Реклама вашего бренда в самых лучших местах города
                            </p>
                        </div>


                        <div className="col-4">
                            <img src="/img/service/q1(6).svg" alt=""/>
                            <h1>Работа с блогерами</h1>
                            <p>
                                Самые эффективные рекламы у лидеров мнений
                            </p>
                        </div>


                        <div className="col-4">
                            <img src="/img/service/q1(2).svg" alt=""/>
                            <h1>Дизайн</h1>
                            <p>
                                Разработаем брендбук и фирменный стиль компании
                            </p>
                        </div>
                    </div>


                    <p className="sel">
                        Также пакет услуг может собираться индивидуально под ваши цели
                    </p>
                </div>
            </div>
        );
    }
}

export default Marceting;