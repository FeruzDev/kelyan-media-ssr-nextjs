import React, { useState, useEffect} from 'react';
import Link from "next/link";
import axios from "axios"
import BlogItem from "../BlogItem";
import {PaginationItem, PaginationLink, Pagination} from "reactstrap";




const Posts = () => {

    const [posts, setPosts] =  useState([]);


    useEffect(() => {

        axios.post("https://api.kelyanmedia.com/get-articles")
            .then( res =>{
                setPosts(res.data)
            })
    } , []);


    const pageSize = 6;

    const pagesCount = Math.ceil(posts.length / pageSize);

    const path =  "https://api.kelyanmedia.com"
    const  [ currentPage, setCurrentPage] = useState(0);




    const    handleClick  = (e, index) => {

        e.preventDefault();
        setCurrentPage(index)


    }



    return (
      <div className="Posts">
         <div className="container">



            <h3
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="styles_typicalWrapper__1_Uvh ml-auto mr-auto"
            >СТАТЬИ</h3>

            <div className="posts-content">
               <div className="row">

                   {posts.slice(
                       currentPage * pageSize,
                       (currentPage + 1) * pageSize
                   )
                       .map((item, i) =>

                           <div className="col-md-4" >
                               <div className="card border-0 h-100 bg-transparent text-white"
                               >

                                   <div className="card-header border-0 p-0 d-flex justify-content-between align-items-center">
                                       <p className="mb-0">KELYAN<span>MEDIA</span></p>
                                       <div className="tag">SMM</div>
                                   </div>
                                   <div className="card-body p-0 border-0">
                                       <div className="overflow-hidden"><img src={path + item.image} alt="" className="w-100"/></div>

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


                       )}
               </div>
            </div>
             <div className="pagination-wrapper mt-5  ">

                 <Pagination aria-label="Page navigation example " className="justify-content-center">

                     <PaginationItem disabled={currentPage <= 0}>

                         <PaginationLink
                             onClick={e => handleClick(e, currentPage - 1)}
                             previous
                             href="#"
                         />

                     </PaginationItem>

                     {[...Array(pagesCount)].map((page, i) =>
                         <PaginationItem active={i === currentPage} key={i}>
                             <PaginationLink onClick={e => handleClick(e, i)} href="#">
                                 {i + 1}
                             </PaginationLink>
                         </PaginationItem>
                     )}

                     <PaginationItem disabled={currentPage >= pagesCount - 1} >

                         <PaginationLink
                             onClick={e => handleClick(e, currentPage + 1)}
                             next
                             href="#"

                         />

                     </PaginationItem>

                 </Pagination>

             </div>

         </div>
      </div>
   );
};

export default Posts;