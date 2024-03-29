import React from 'react';

const PpsPr = () => {
    const promotingData = [
        {
            title: "Вы четко понимаете, за что платите ",
            content: "Вы сами устанавливаете ежедневный бюджет на кампании. А система предупреждает вас о потенциальном охвате по кликам и показам при таких вложениях. Когда же деньги потрачены, в интерфейсе отображаются все расходы на рекламную кампанию. Словом, все максимально прозрачно"
        },
        {
            title: "Начинает работать сразу ",
            content: "Объявления показываются сразу после того, как вы запустили контекстную рекламу и она прошла модерацию — это обычно занимает максимум один день"
        },
        {
            title: "Точность ЦА для вашего бизнеса ",
            content: "Контекстная реклама настраивается таким образом, что ваше объявление увидит только целевая аудитория"
        },
        {
            title: "Можно определить эффективность рекламы ",
            content: "Контекстная реклама предоставляет возможность проведения «пробной» рекламной кампании и анализа ее эффективности"
        },

    ]

    const proFooterTitle =
        {
            title: "Краткосрочное увеличение результата",
            content: "Прекрасная возможность на небольшой срок увеличить количество приходящих клиентов по какому-либо товару или услуге"
        }

    return (
        <div className="Promoting">


            <div className="container">
                <h3> PPS Контекстная реклама преимущества</h3>

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
                    <p className="pr-5 pl-5" >{proFooterTitle.content}</p>
                </div>
            </div>
        </div>
    );
};

export default PpsPr;