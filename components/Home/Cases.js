import React, {Component} from 'react';

class Cases extends Component {

    render() {
        return (
            <div className="Cases">
             <div className="container">
                 <h2 >Наше портфолио</h2>
                 <h3 className="styles_typicalWrapper__1_Uvh"
                 >КЕЙСЫ</h3>
             </div>

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

                </div>



                <div className="w-100 text-center">

                    {/*<Link href="/cases"><a  >Все проекты <img src="/img/icon/arrow.png" alt=""/></a></Link>*/}
                </div>
            </div>
        );
    }
}

export default Cases;