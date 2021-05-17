import React from 'react';

const ProLanding = () => {
    return (
        <div className="ProLanding">
            <h3  className="pl-5 pr-5 text-center">Готовое решение для повышения продаж в интернете</h3>
            <div className="container">
                <div className="row">
                    <div className="col-4 desctopVersion">
                        <h2><span>
                    Правильно
                      <div className="borderTop"/>
                  </span>
                        </h2>
                        <p>
                            Правильно позиционирует компанию на рынке, предоставляет нужную информацию и формирует первое впечатление у людей
                        </p>


                        <h2>
                      <span>
                         Подробно
                      <div className="borderTop"/>
                      </span>
                        </h2>


                        <p>
                            Подробно информирует своих потенциальных клиентов о всех услугах и товарах, а также знакомит их с компанией, с ее историей и работниками
                        </p>


                        <h2>
                      <span>
                      Удобно
                             <div className="borderTop"/>
                       </span>
                        </h2>
                        <p>
                            Удобно предоставляет всю нужную информацию о компании и ее контактные данные
                        </p>


                    </div>

                    <div className="col-6 mobileVersion">
                        <h2><span>
                      Правильно
                      <div className="borderTop"/>
                  </span>
                        </h2>
                        <p>
                            Правильно позиционирует компанию на рынке, предоставляет нужную информацию и формирует первое впечатление у людей
                        </p>


                        <h2>
                      <span>
                       Подробно
                      <div className="borderTop"/>
                      </span>
                        </h2>


                        <p>
                            Подробно информирует своих потенциальных клиентов о всех услугах и товарах, а также знакомит их с компанией, с ее историей и работниками
                        </p>


                        <h2>
                      <span>
                    Удобно
                             <div className="borderTop"/>
                       </span>
                        </h2>
                        <p>
                            Удобно предоставляет всю нужную информацию о компании и ее контактные данные
                        </p>


                    </div>
                    <div className="col-6 pl-5 pr-5 mobileVersion">
                        <img src="/img/service/centerImg.jpg" alt=""/>
                    </div>
                    <div className="col-4 pl-5 pr-5 desctopVersion">
                        <img src="/img/service/centerImg.jpg" alt=""/>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ProLanding;