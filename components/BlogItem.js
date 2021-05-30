import React, {Component} from 'react';
import axios from 'axios'
class BlogItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postItem: {},
            postList: [],


        }
    }

    componentDidMount() {



        axios.post("https://api.kelyanmedia.com/get-articles"   )
            .then(res =>{
                this.setState({postList: res.data})

            })




        axios.post("https://api.kelyanmedia.com/get-article", {id: window.location.pathname.slice(6)} )
            .then(res =>{
                this.setState({postItem: res.data})

            })
    }

    render() {
        {
            // console.log(this.props.id)
        }
        return (
            <div className="BlogItem">
                <div className="container">


                    <div className="row">

                        <div className="blogDate">
                            <h1>KELYAN<b>MEDIA</b></h1>
                            <span className="text-secondary">{this.state.postItem.created_at}</span>
                            <span className="tag text-white">SMM</span>
                        </div>


                        <div className="col-md-12">

                            <img src={this.state.postItem.image}/>

                           <p dangerouslySetInnerHTML={{__html: this.state.postItem.description_ru}} />



                    </div>


                    </div>








                </div>



                <div className="container">
                    <div className="posts-content">
                        <div className="row ">
                            {/*<div className="col-md-4" >*/}
                            {/*    <div className="card border-0 h-100 bg-transparent text-white"*/}
                            {/*    >*/}

                            {/*        <div className="card-header border-0 p-0 d-flex justify-content-between align-items-center">*/}
                            {/*            <p className="mb-0">KELYAN<span>MEDIA</span></p>*/}
                            {/*            <div className="tag">SMM</div>*/}
                            {/*        </div>*/}
                            {/*        <div className="card-body p-0 border-0">*/}
                            {/*            <div className="overflow-hidden"><img src="/img/rec3.png" alt="" className="w-100"/></div>*/}

                            {/*            <h4>Как раскрутить цветочный магазин в Инстаграме</h4>*/}
                            {/*        </div>*/}
                            {/*        <div className="card-footer border-0 p-0 d-flex justify-content-between align-items-center">*/}
                            {/*            <div>SMM</div>*/}
                            {/*            <div>07.02.2021</div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                            {
                                this.state.postList.slice(0, 5).map(item => (
                                    <div className="col-md-4" >
                                        <div className="card border-0 h-100 bg-transparent text-white"
                                        >

                                            <div className="card-header border-0 p-0 d-flex justify-content-between align-items-center">
                                                <p className="mb-0">KELYAN<span>MEDIA</span></p>
                                                <div className="tag">SMM</div>
                                            </div>
                                            <div className="card-body p-0 border-0">
                                                <div className="overflow-hidden"><img src={item.image} alt="" className="w-100"/></div>

                                                <h4>{item.name_ru}</h4>
                                            </div>
                                            <div className="card-footer border-0 p-0 d-flex justify-content-between align-items-center">
                                                <div>SMM</div>
                                                <div>{item.created_at}</div>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }



                        </div>
                    </div>
                </div>





            </div>
        );
    }
}

export default BlogItem;