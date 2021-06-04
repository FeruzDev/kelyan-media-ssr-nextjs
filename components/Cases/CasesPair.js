import React, {Component, useEffect, useState} from 'react';

import Link from "next/link";

import axios from "axios";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

const CasesPair = () => {
    const [posts, setPosts] =  useState([]);


    useEffect(() => {

        axios.post("https://api.kelyanmedia.com/get-cases")
            .then( res =>{
                setPosts(res.data)
            })
    } , []);


    const pageSize = 12;

    const pagesCount = Math.ceil(posts.length / pageSize);

    const path =  "https://api.kelyanmedia.com"
    const  [ currentPage, setCurrentPage] = useState(0);




    const    handleClick  = (e, index) => {

        e.preventDefault();
        setCurrentPage(index)


    }


    return (

        <div className="Cases">



                    <div className="row">

                        {posts.slice(
                            currentPage * pageSize,
                            (currentPage + 1) * pageSize
                        )
                            .map((item, i) =>



                                <div className="col-md-6" style={{height: "400px"}}>
                                    <Link href={"/cases/" + item.id}  >
                                        <a  ><img src={path + item.image} className="h-100 w-100" alt=""/></a>
                                    </Link>
                                </div>


                            )}
                    </div>






                <div className="pagination-wrapper mt-5 w-100  justify-content-center ml-5">

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



    );
};

export default CasesPair;