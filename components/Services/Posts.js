import React, { useState, useEffect} from 'react';
import Link from "next/link";
import axios from "axios"
import BlogItem from "../BlogItem";





const Posts = () => {

    const [posts, setPosts] =  useState([]);


    useEffect(() => {

        axios.post("https://api.kelyanmedia.com/get-articles")
            .then( res =>{
                setPosts(res.data)
            })
    } , []);


    return (
      <div className="Posts">
         <div className="container">



            <h3
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="styles_typicalWrapper__1_Uvh">СТАТЬИ</h3>

            <div className="posts-content">
               <div className="row">
{/*                  <div className="col-md-4" >*/}
{/*                     <div className="card border-0 h-100 bg-transparent text-white"*/}
{/*>*/}

{/*                        <div className="card-header border-0 p-0 d-flex justify-content-between align-items-center">*/}
{/*                           <p className="mb-0">KELYAN<span>MEDIA</span></p>*/}
{/*                           <div className="tag">SMM</div>*/}
{/*                        </div>*/}
{/*                        <div className="card-body p-0 border-0">*/}
{/*                           <div className="overflow-hidden"><img src="/img/rec3.png" alt="" className="w-100"/></div>*/}

{/*                           <h4>Как раскрутить цветочный магазин в Инстаграме</h4>*/}
{/*                        </div>*/}
{/*                        <div className="card-footer border-0 p-0 d-flex justify-content-between align-items-center">*/}
{/*                           <div>SMM</div>*/}
{/*                           <div>07.02.2021</div>*/}
{/*                        </div>*/}
{/*                         <div className="blogLine"></div>*/}
{/*                         <Link href="/blog/1" ><a className="blogLink">Подробнее</a></Link>*/}

{/*                     </div>*/}

{/*                  </div>*/}





                   {
                       posts.slice(0, 6).map(item => (
                           <div className="col-md-4" >
                               <div className="card border-0 h-100 bg-transparent text-white"
                               >

                                   <div className="card-header border-0 p-0 d-flex justify-content-between align-items-center">
                                       <p className="mb-0">KELYAN<span>MEDIA</span></p>
                                       <div className="tag">SMM</div>
                                   </div>
                                   <div className="card-body p-0 border-0">
                                       <div className="overflow-hidden"><img src={item.imgage} alt="" className="w-100"/></div>

                                       <h4>{item.name_ru}</h4>
                                   </div>
                                   <div className="card-footer border-0 p-0 d-flex justify-content-between align-items-center">
                                       <div>SMM</div>
                                       <div>{item.created_at}</div>
                                   </div>
                                   <div className="blogLine"></div>
                                   <Link href={/blog/ + item.id} ><a className="blogLink">Подробнее</a></Link>




                               </div>

                           </div>



                       ))
                   }
               </div>
            </div>
         </div>
      </div>
   );
};

export default Posts;