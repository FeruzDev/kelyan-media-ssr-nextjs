import React from 'react';

const WriteTextPr = () => {
    const promotingData = [
        {
            title: " SEO-ТЕКСТЫ",
            content: "Уникальные тексты для внутренней оптимизации сайта с оптимальной частотой вхождения ключевых слов для эффективного продвижения вашего сайта. Напишем интересный текст по техническим требованиям поисковиков"
        },
        {
            title: "Преимущества использования сео-текстов ",
            content: "Поисковые боты, которые анализируют и оценивают контент на сайте, проверяют текст на полезность и наличие ключевых слов. Информация, которая кажется алгоритму интересной, появляется в начале страницы после введения запроса"
        },


    ]

    const proFooterTitle =
        {
            title: "Преимущества использования сео-текстов",
            content: "Написание сео текстов позволяет подстроиться под поисковых ботов и успешно продвигаться в топе выдачи. Чем больше пользователей сочтут данные на сайте интересными, тем выше вероятность увеличение спроса на услуги или товары. Полезный и оптимизированный контент – то, без чего сложно добиться результатов"
        }

    return (
        <div className="Promoting">


            <div className="container">
                <h3> Написание текстов</h3>

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

export default WriteTextPr;