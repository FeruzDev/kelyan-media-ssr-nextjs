import React from 'react';

const ComplexPr = () => {
    const promotingData = [
        {
            title: " 100% охват потенциальной аудитории",
            content: "Благодаря предварительно проведенному аудиту мы точно будем знать, где обитают ваши клиенты и посетители. Мы подключим лишь те виды продвижения, которые действительно будут эффективны"
        },
        {
            title: "Результат от продвижения будет виден сразу",
            content: "Так как в комплексном продвижении используются несколько направлений раскрутки, то пока одно будет наращивать обороты, от другого уже будет идти отдача"
        },
        {
            title: "Экономия денежных средств",
            content: "При комплексном продвижении аудит проводится один раз – первый пункт экономии. Совокупность нескольких методов продвижения сокращает сроки достижения результата, соответственно сокращаются размеры денежных вложений – второй пункт экономии"
        },
        {
            title: "Повышение конверсии",
            content: "Комплексное продвижение повышает конверсию благодаря тому, что воздействует на потенциального клиента несколькими способами, через несколько разных каналов. Например, поисковая выдача и соц. сети. Благодаря этому, посетитель более лоялен к бренду и раскручиваемому товару"
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
                <h3>Комплексное продвижение преимущества </h3>

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

export default ComplexPr;