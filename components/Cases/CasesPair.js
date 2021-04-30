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
                        <img src="/img/rec72.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img   src="/img/rec73.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img  src="/img/rec74.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img   src="/img/rec75.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img   src="/img/rec77.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img   src="/img/rec76.png" alt=""/>
                    </div>


                    <div className="col-md-6">
                        <img  src="/img/rec1(9).png" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img   src="/img/rec1(8).png" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img   src="/img/rec1(7).png" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img  src="/img/rec1(6).png" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img  src="/img/rec1(5).png" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img   src="/img/rec1(4).png" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img  src="/img/rec1(3).png" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img    src="/img/rec1(2).png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CasesPair;