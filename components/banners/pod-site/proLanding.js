import React from 'react';

const ProLanding = () => {
    return (
        <div className="ProLanding">
            <h3 className="pl-5 pr-5 text-center"> В первую очередь не обновление контента на сайте, а <br/> внедрение новых функций, доработка новых разделов сайта, <br/> оптимизация сайта</h3>
            <div className="container">
                <div className="row">
                    <div className="col-4 desctopVersion">
                        <h2><span>
                   В чем заключается поддержка сайтов?
                      <div className="borderTop"/>
                  </span>
                        </h2>
                        <p>
                            В случае, если полноценный сайт начинает тормозить и выдавать какие-либо ошибки, мы
                            исправляем все неполадки и нормализуем его функционирование
                        </p>


                    </div>

                    <div className="col-6 mobileVersion">
                        <h2><span>
                   В чем заключается поддержка сайтов?
                      <div className="borderTop"/>
                  </span>
                        </h2>
                        <p>
                            В случае, если полноценный сайт начинает тормозить и выдавать какие-либо ошибки, мы
                            исправляем все неполадки и нормализуем его функционирование
                        </p>



                        <h2><span>
                Технические моменты
                  </span>
                            <div className="borderTop"/>
                        </h2>


                        <p>
                            Если на сайте есть некорректная или же устаревшая информация, мы переделываем нужные страницы и создаем для сайта презентабельный и грамотный вид
                        </p>


                    </div>
                    <div className="col-6 pl-5 pr-5 mobileVersion">
                        <img src="/img/service/centerImg.jpg" alt=""/>
                    </div>
                    <div className="col-4 pl-5 pr-5 desctopVersion">
                        <img src="/img/service/centerImg.jpg" alt=""/>
                    </div>

                    <div className="col-4 desctopVersion">

                        <h2><span>
                Технические моменты
                  </span>
                            <div className="borderTop"/>
                        </h2>


                        <p>
                            Если на сайте есть некорректная или же устаревшая информация, мы переделываем нужные страницы и создаем для сайта презентабельный и грамотный вид
                        </p>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProLanding;