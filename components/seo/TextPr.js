import React from 'react';

const TextPr = () => {
    const promotingData = [
        {
            title: "Чем ниже позиция, тем ниже ее стоимость",
            content: "Вывод каждого конкретного запроса в ТОП имеет свою индивидуальную стоимость"
        },
        {
            title: "Чем ниже позиция, тем ниже ее стоимость",
            content: "Клиент видит необходимые страницы сайта в ТОП-10, и только после этого оплачивает результат. Стоимость продвижения варьируется в зависимости от географической локации"
        },
        {
            title: "Чем ниже позиция, тем ниже ее стоимость",
            content: "Если страницы уже находятся в ТОПе Google, то их продвижение в «Яндексе» обходится намного дешевле;\n" +
                " оптимизацию проходят только оговоренные страницы, поэтому, когда в ТОП выходят другие сопутствующие страницы, платить за побочные положительные результаты не нужно"
        },
        {
            title: "Чем ниже позиция, тем ниже ее стоимость ",
            content: "Нужно помнить, что Google и «Яндекс» выводят в ТОП только качественные, полезные и удобные сайты. Соответственно, наши специалисты не просто выводят страницы в ТОП-10, а делают сам сайт лучше. "
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
                <h3> Продвижение по ключевым словам</h3>

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

export default TextPr;