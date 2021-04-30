import React, {Component} from 'react';

class ConsultationApplication extends Component {
    render() {
        return (
            <div className="ConsultationApplication">
                <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <h1>Оставить <br/>
                              заявку на
                              <span className="styles_typicalWrapper__1_Uvh">консультацию</span></h1>
                          <img src="/img/icon/left-arrow.png" className="arrow" alt="..."/>
                      </div>
                      <div className="col-md-6">
                          <form >
                              <input type="text" placeholder="Ваше имя" className="form-control"/>
                              <div className="inputNumber">
                                  <img src="/img/icon/flag.svg" alt=""/>
                                  <input type="text" placeholder="99 8 (99) 999-99-99" className="form-control"/>
                              </div>

                              <input type="email" placeholder="Ваше email" className="form-control"/>
                              <button className="btn">Заказать консультацию </button>
                          </form>
                      </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default ConsultationApplication;