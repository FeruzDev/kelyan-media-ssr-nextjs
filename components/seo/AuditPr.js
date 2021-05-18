import React from 'react';

const AuditPr = () => {
    const promotingData = [
        {
            title: "Существенный рост клиентской базы и расширение бизнеса. ",
        },
        {
            title: " Увеличение конверсии и прибыльности Вашего сайта",
        },
        {
            title: "Достижение ощутимого эффекта в реальные сроки (от 3 месяцев) ",
        },
        {
            title: " Точную стоимостную оценку эффективности проведенных мероприятий по аудиту сайта",
        },

    ]

    const proFooterTitle =
        {
            title: "Гарантию соблюдений требований Яндекса и Google в части поискового продвижения и оптимизации интернет-ресурсов",
        }

    return (
        <div className="Promoting">


            <div className="container">

               <h4 className="p-5   text-center text-white"> Главная цель комплексного аудита и всестороннего анализа – качественная оценка текущего  состояния
                   коммерческого ресурса, выявление ошибок и недочётов, разработка мероприятий для   улучшения позиций
                   ресурса в поисковой выдаче, по увеличению трафика и росту конверсии</h4>

                <h3>Что даёт аудит и анализ сайтов?</h3>

                <div className="row">
                    {
                        promotingData.map(item => (
                            <div className="col-md-6 p-4">
                                <h4>{item.title}</h4>
                                <div className="line"/>

                            </div>
                        ))
                    }

                </div>


                <div className="row text-center">
                    <h4 className="w-100" style={{textAlign: "center !important"}}>{proFooterTitle.title}</h4>
                </div>

            </div>
        </div>
    );
};

export default AuditPr;