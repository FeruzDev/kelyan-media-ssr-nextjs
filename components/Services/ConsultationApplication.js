import React, {Component} from 'react';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

class ConsultationApplication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fio : '',
            phone: '',

        }
    }

    changeHandler =e =>{
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault();



        axios.post("https://api.kelyanmedia.com/new-bid", this.state)
            .then(res =>{
                toast.success("Заявка отправлена")

            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {
        return (
            <div className="ConsultationApplication">
                <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <h1>Оставить <br/>
                              заявку на
                              <br/>
                              <span className="styles_typicalWrapper__1_Uvh">консультацию</span></h1>
                          <img src="/img/icon/left-arrow.png" className="arrow" alt="..."/>
                      </div>
                      <div className="col-md-6">
                          <form onSubmit={this.submitHandler}>
                              <input type="text" name="fio" placeholder="Ваше имя" className="form-control" onChange={this.changeHandler}/>
                              <div className="inputNumber">
                                  <img src="/img/icon/flag.svg" alt=""/>
                                  <input type="text"  name="phone" placeholder="99 8 (99) 999-99-99" className="form-control"  onChange={this.changeHandler}/>
                              </div>

                              <button className="btn" type="submit" >Заказать консультацию </button>
                          </form>

 

                      </div>
                  </div>
                </div>
                <ToastContainer/>

            </div>
        );
    }
}

export default ConsultationApplication;