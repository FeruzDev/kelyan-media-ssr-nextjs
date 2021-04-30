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
                        <img  src="/img/rec72.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec73.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec74.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec75.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec77.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec76.png" alt=""/>
                    </div>
                </div>



                <div className="w-100 text-center">

                    <button>Все проекты <img src="/img/icon/arrow.png" alt=""/></button>
                </div>
            </div>
        );
    }
}

export default Cases;