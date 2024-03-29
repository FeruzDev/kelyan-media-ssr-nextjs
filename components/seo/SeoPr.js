import React from 'react';

const SeoPr = () => {
    const promotingData = [
        {
            title: "Увеличение продаж",
            content: "SEO, как и любой другой вид рекламы, направлен на то, чтобы привлечь новых потенциальных клиентов и постараться продать им свои товары или услуги. Увеличивая целевой поисковый трафик, вы получаете новых клиентов из месяца в месяц и, соответственно, увеличиваете свой доход и клиентскую базу"
        },
        {
            title: "Продолжительность",
            content: "Остановите SEO сегодня - ваш сайт будет продолжать ранжироваться в поисковой системе и давать вам трафик. Не нужно платить за клики или посещения!"
        },
        {
            title: "Влияние на рынок",
            content: "Большинство компаний, которые занимают ТОП-3 выдачу в поисковых системах, оказывают сильное влияние и воздействие на рынок в своей нише, создают тренды."
        },
        {
            title: "Повышается доверие к бренду",
            content: "Представьте, что вы получаете ответ на свой вопрос практически сразу перейдя на какой-то сайт. А если этот ответ виден на первой же странице поисковой системы, то это уже залог вашего доверия как потенциального клиента компании"
        },

    ]

    const proFooterTitle =
        {
            title: "SEO экономит бюджеты",
            content: "Конечно, SEO требует определенных затрат. Но при этом эффект от хорошо проделанной работы имеет долгосрочную перспективу. После продвижения трафик будет бесплатным на протяжении всего оставшегося времени"
        }

    return (
        <div className="Promoting">


            <div className="container">
                <h3>SEO - продвижение</h3>

                <div className="row">
                    {
                        promotingData.map(item => (
                            <div className="col-md-6 p-4">
                                <h4>{item.title}</h4>
                                <div className="line"/>
                                <p>{item.content}</p>
                            </div>
                        ))
                    }

                </div>


                <div className="row text-center">
                    <h4 className="w-100" style={{textAlign: "center !important"}}  >{proFooterTitle.title}</h4>
                    <p className="pr-5 pl-5" >{proFooterTitle.content}</p>
                </div>


            </div>
        </div>
    );
};

export default SeoPr;