import React, {Component} from 'react';
import AOS from "aos";

class CasesPair extends Component {

    componentDidMount() {
        AOS.init();

    }
    render() {
        return (
            <div className="Cases">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/img/service/q2.jpg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/service/q3.jpg" alt=""/>

                    </div>
                    <div className="col-md-6">
                        <img src="/img/service/q4.jpg" alt=""/>

                    </div>
                    <div className="col-md-6">
                        <img src="/img/service/q5.jpg" alt=""/>

                    </div>
                    <div className="col-md-6">
                        <img src="/img/service/q7.jpg" alt=""/>

                    </div>
                    <div className="col-md-6">
                        <img src="/img/service/q6.jpg" alt=""/>

                    </div>


                    <div className="col-md-6">
                        <img  src="/img/service/q9.jpg" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img  src="/img/service/q10.jpg" alt=""/>

                    </div>

                    <div className="col-md-6">
                        <img  src="/img/service/q11.jpg" alt=""/>

                    </div>

                    <div className="col-md-6">
                        <img  src="/img/service/q12.jpg" alt=""/>

                    </div>

                    <div className="col-md-6">
                        <img  src="/img/service/q14.jpg" alt=""/>

                    </div>

                    <div className="col-md-6">
                        <img  src="/img/service/q15.jpg" alt=""/>

                    </div>

                    <div className="col-md-6">
                        <img  src="/img/service/q16.jpg" alt=""/>

                    </div>

                    <div className="col-md-6">
                        <img  src="/img/service/q17.jpg" alt=""/>

                    </div>
                </div>
            </div>
        );
    }
}

export default CasesPair;