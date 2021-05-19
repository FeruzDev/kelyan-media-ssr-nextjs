import React, {Component} from 'react';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class SerContact extends Component {
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
                toast.success("Заявка отправлена");

            })
            .catch(error =>{
                console.log(error)
            })




        this.setState({
            fio : '',
            phone: '',
        });

    }


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

                            <form className="appLicationRequest" onSubmit={this.submitHandler}>
                                <input name="fio"   type="text" placeholder="Ваше имя " className="form-control mt-5" onChange={this.changeHandler}/>
                                <input type="text" name="phone"  placeholder="Телефон" className="form-control mt-4" onChange={this.changeHandler}/>
                                <button type="submit" className="btn mt-3 btn-block">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        );
    }
}

export default SerContact;