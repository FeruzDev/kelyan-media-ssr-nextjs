import React from 'react';

const ConversiPr = () => {
    const promotingData = [
        {
            title: "Накопительный эффект ",
            content: "Основное преимущество CRO заключается в том, что каждое изменение, которое вы вносите на свой лендинг и которое приводит к увеличению конверсий, будет приносить вам дополнительную прибыль"
        },
        {
            title: "Улучшение поисковой оптимизации ",
            content: "Оптимизация конверсии — лучший способ сделать ваш сайт максимально полезным, что, в свою очередь, улучшит его позиции в поисковых системах"
        },
        {
            title: "Увеличение жизненной ценности клиента ",
            content: "Сайт, который легко найти и на котором легко ориентироваться, будет привлекать к себе посетителей снова и снова. Это отличная новость для любой компании, которой приходится затрачивать средства для увеличения числа повторных продаж"
        },
        {
            title: "Прибыль для вашей компании ",
            content: "Если ваш сайт не такой прибыльный, оптимизация конверсии поможет исправить это досадное недоразумение"
        },

    ]

    const proFooterTitle =
        {
            title: "Доступность продукта!",
            content: "Оптимизация конверсии делает ваш лендинг не только привлекательным, но и более доступным"
        }

    return (
        <div className="Promoting">


            <div className="container">
                <h3>CRO Преимущества оптимизации коэффициента конверсии </h3>

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

export default ConversiPr;