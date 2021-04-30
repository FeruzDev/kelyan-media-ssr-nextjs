import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogHeader from "../../components/Blog/BlogHeader";
import Posts from "../../components/Services/Posts";
import ConsultationApplication from "../../components/Services/ConsultationApplication";

const BlogPage = (props) => {
    return (
        <>
            <Navbar history={props.history}/>
            <BlogHeader className="mb-100" image="rec78.svg" text="Блог"/>

            <Posts />
            <ConsultationApplication/>
            <Footer/>
        </>
    );
};

export default BlogPage;