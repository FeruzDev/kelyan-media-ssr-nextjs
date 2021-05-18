import React, {Component} from 'react';
import Typical from "react-typical"
import AOS from "aos";
import axios from "axios";

class Application extends Component {
    componentDidMount() {
        AOS.init();

    }
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

            })
            .catch(error =>{
                console.log(error)
            })
    }


    render() {

        return (
            <div className="Application">
                <div className="container">

                    {/*<Typical*/}
                    {/*    steps={['СВЯЗАТЬСЯ С НАМИ', 1000, '   ОСТАВЬТЕ ЗАЯВКУ', 2000]}*/}
                    {/*    loop={once}*/}
                    {/*    wrapper="h3"*/}
                    {/*/>*/}
                    <h3>СВЯЗАТЬСЯ С НАМИ</h3>
                    <div className="row">
                        <div className="col-md-12">




                            <form className="appLicationRequest" onSubmit={this.submitHandler}>


                                <input type="text "
                                       data-aos="fade-up"
                                       data-aos-easing="linear"
                                       data-aos-duration="1000"
                                       placeholder="Ваше имя"
                                       className="form-control"
                                       name="fio"   type="text"
                                       onChange={this.changeHandler}
                                />


                                <div className="inputNumber"
                                     data-aos="fade-up"
                                     data-aos-easing="linear"
                                     data-aos-duration="1000"
                                     data-aos-delay="300"
                                >
                                    <img src="/img/icon/flag.svg" alt=""/>
                                    <input type="text" name="phone" placeholder="99 8 (99) 999-99-99" className="form-control" onChange={this.changeHandler}/>
                                </div>
                                    <button type="submit" className="btn">Отправить</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Application;