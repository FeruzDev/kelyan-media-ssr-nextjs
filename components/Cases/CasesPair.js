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
                        <img  src="/img/service/q9.svg" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img  src="/img/service/q10.svg" alt=""/>

                    </div>

                    {/*<div className="col-md-6">*/}
                    {/*    <img   src="/img/rec1(7).png" alt=""/>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-6">*/}
                    {/*    <img  src="/img/rec1(6).png" alt=""/>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-6">*/}
                    {/*    <img  src="/img/rec1(5).png" alt=""/>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-6">*/}
                    {/*    <img   src="/img/rec1(4).png" alt=""/>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-6">*/}
                    {/*    <img  src="/img/rec1(3).png" alt=""/>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-6">*/}
                    {/*    <img    src="/img/rec1(2).png" alt=""/>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default CasesPair;