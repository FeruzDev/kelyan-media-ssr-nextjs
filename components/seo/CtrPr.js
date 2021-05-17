import React from 'react';

const CtrPr = () => {
    const promotingData = [
        {
            title: "Хороший CTR ведет к хорошему показателю качества ",
            content: "Повышает эффективность вашей рекламы, обеспечивая оптимизацию кампании для дальнейшего продвижения к вашим целям"
        },
        {
            title: " Хороший CTR увеличивает посещаемость веб-сайта",
            content: "Благодаря высокому CTR трафик проходит через вашу рекламу на целевые страницы вашего веб-сайта. Если у вас низкий CTR, но относительно низкий уровень показов, это признак того, что вы не привлекаете новых посетителей"
        },
        {
            title: "Хороший CTR улучшает ваш рейтинг и видимость",
            content: "Google поощряет релевантность. Итак, если у вас есть релевантная реклама и высокий CTR, Google это заметит. Вскоре, когда ваш показатель качества повысится, Google будет показывать ваше объявление на более заметном месте в поисковой выдаче"
        },
        {
            title: "Хороший CTR повышает коэффициент конверсии",
            content: "С увеличением количества кликов и трафика становится ясно, что вскоре может последовать больше конверсий"
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
                <h3>CTR </h3>

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

export default CtrPr;