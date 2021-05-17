import React from 'react';

const ConversiPr = () => {
    const promotingData = [
        {
            title: " ",
            content: ""
        },
        {
            title: " ",
            content: ""
        },
        {
            title: " ",
            content: ""
        },
        {
            title: " ",
            content: ""
        },

    ]

    const proFooterTitle =
        {
            title: "",
            content: ""
        }

    return (
        <div className="Promoting">


            <div className="container">
                <h3> </h3>

                <div className="row">
                    {
                        promotingData.map(item => (
                            <div className="col-md-6 p-4">
                                <h4>{item.title}</h4>
                                <div className="line" />
                                <p>{item.content}</p>
                            </div>
                        ))
                    }

                </div>


                <div className="row text-center">
                    <h4 className="w-100" style={{textAlign: "center !important"}}  >{proFooterTitle.title}</h4>
                    <p className="pr-5 pl-5 ml-5 mr-5" >{proFooterTitle.content}</p>
                </div>

            </div>
        </div>
    );
};

export default ConversiPr;