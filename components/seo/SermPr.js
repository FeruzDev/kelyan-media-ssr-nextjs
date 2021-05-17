import React from 'react';

const SermPr = () => {
    const promotingData = [
        {
            title: "Создание положительного образа бренда или персоны в поисковых системах",
            content: "Публикация оптимизированных отзывов и комментариев на рекомендательных сервисах, отзовиках о работодателях и в справочниках, на которых уже есть карточки компании и в тех, что только создали"
        },
        {
            title: "Влияние на выдачу поисковых систем",
            content: "Регистрация и оптимизация карточек компании на всех рекомендательных сервисах, отзовиках о работодателях, агрегаторах, справочниках"
        },
        {
            title: "Поиск и нейтрализация негативных публикаций",
            content: "Применяются современные методы нейтрализации негатива"
        },
        {
            title: "Актив",
            content: "Постоянный мониторинг на случай появления новых упоминаний"
        },

    ]

    const proFooterTitle =
        {
            title: "",
            content: ""
        }

    return (
        <div className="Promoting">


            <div className="container">
                <h3>Search Engine Reputation Management (SERM) - <br/>Управление репутацией в поисковых машинах </h3>

                <div className="row">
                    {
                        promotingData.map(item => (
                            <div className="col-md-6 p-4">
                                <h4>{item.title}</h4>
                                <div className="line" />
                                <p>{item.content}</p>
                            </div>
                        ))
                    }

                </div>


                <div className="row text-center">
                    <h4 className="w-100" style={{textAlign: "center !important"}}  >{proFooterTitle.title}</h4>
                    <p className="pr-5 pl-5 ml-5 mr-5" >{proFooterTitle.content}</p>
                </div>

            </div>
        </div>
    );
};

export default SermPr;