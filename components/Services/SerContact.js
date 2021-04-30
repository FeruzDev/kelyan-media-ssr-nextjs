import React, {Component} from 'react';


class SerContact extends Component {


    render() {
        return (
            <div className="SerContact">

                <div className="container">
                    <div className="row">
                        <div className="col-md-7" />
                        <div className="col-md-4 mb-5  ">
                            <h1

                                >Хотите поднять продажи?</h1>
                            <p

                                >Давайте знакомиться!</p>
                            <p


                                >Заполните форму ниже и мы с вами свяжемся.</p>


                            <form>
                               <div>
                                   <label htmlFor="name">Ваше имя</label>
                                   <input  className="form-control" type="text" id="name"/>
                               </div>

                             <div>
                                 <label htmlFor="name">Телефон</label>
                                 <input  className="form-control" type="text" id="name"/>
                             </div>

                                <button className="btn btn-block mt-4">Подтвердить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SerContact;