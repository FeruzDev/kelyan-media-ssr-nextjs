import React from 'react';

const ASOPr = () => {
    const promotingData = [
        {
            title: "Повышение позиций в поисковой выдаче",
            content: "App Store Optimization повышает «видимость» приложений в App Store и Google Play. Даже действительно качественные программы нуждаются в продвижении, чтобы их заметили и начали скачивать"
        },
        {
            title: "Целевая аудитория",
            content: "App Store Optimization помогает найти «правильных» пользователей, заинтересованных в вашем продукте"
        },
        {
            title: "Работа на долгосрочную перспективу",
            content: "ASO увеличивает количество органических загрузок от реальных людей по их инициативе в долгосрочной перспективе"
        },
        {
            title: "Прибыль для вашей компании",
            content: "Оптимизация под App Store и Google Play позволяет сократить расходы на привлечение аудитории и при этом увеличивает доход программы за счет постоянного роста загрузок со стороны целевой аудитории"
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
                <h3>ASO Преимущества App Store Optimization.</h3>

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

export default ASOPr;