import React, {Component} from 'react';
import axios from 'axios'
class CasesItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postItem: {},
            postList: [],
            forId: ''


        }
    }

    componentDidMount() {


        this.setState()

        axios.post("https://api.kelyanmedia.com/get-cases"   )
            .then(res =>{
                this.setState({postList: res.data})

            })






        axios.post("https://api.kelyanmedia.com/get-case", {id: window.location.pathname.slice(7)}  )
            .then(res2 =>{
                this.setState({postItem: res2.data})

                console.log(res2)
            })
    }



    render() {

        const path =  "https://api.kelyanmedia.com"

        return (
            // <div className="BlogItem">
                <div className="container">


                    <div className="row">


                        <h3 className="mb-5 mt-5">{this.state.postItem.name_ru}</h3>
                        <img src={path + this.state.postItem.image} style={{height: "500px", width: "100%"}}/>
                        <div className="col-md-12">


                            <p dangerouslySetInnerHTML={{__html: this.state.postItem.description_ru}} className="mt-3" style={{color: "white", fontSize: "16px", }}/>



                        </div>


                    </div>








                {/*</div>*/}







            </div>
        );
    }
}

export default CasesItem;