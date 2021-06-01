import React from 'react';
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ConsultationApplication from "../../../components/Services/ConsultationApplication";
import BlogItem from "../../../components/BlogItem";
import BlogHeader from "../../../components/Blog/BlogHeader";

const BlogView = (props) => {
    return (
        <div>

            <Navbar history={props.history} />

            <BlogHeader className="mb-100" image="rec78.svg" text="Блог"/>

            <BlogItem />
            <ConsultationApplication/>
            <Footer />
        </div>
    );
};

export default BlogView;