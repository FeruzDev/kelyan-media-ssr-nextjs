import React, {Component} from 'react';
import axios from "axios"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
class Index extends Component {
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
                console.log(res)
            })
            .catch(error =>{
                console.log(error)
            })
    }


    render() {
        return (
            <div className="appliReq">
                <Navbar />
               <div className="container">
                 <div className="row">
                     <div className="col-md-6">
                         <h3>Оставить заявку</h3>

                     </div>
                     <div className="col-md-6 ">
                         <form className="appLicationRequest" onSubmit={this.submitHandler}>
                             <input name="fio"   type="text" placeholder="ФИО " className="form-control" onChange={this.changeHandler}/>
                             <input type="text" name="phone"  placeholder="Телефонный номер" className="form-control" onChange={this.changeHandler}/>
                             <button type="submit" className="btn">Отправить</button>
                         </form>
                     </div>
                 </div>
               </div>

                <Footer/>
            </div>
        );
    }
}

export default Index;