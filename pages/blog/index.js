import React, {useEffect} from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogHeader from "../../components/Blog/BlogHeader";
import Posts from "../../components/Services/Posts";
import ConsultationApplication from "../../components/Services/ConsultationApplication";
import AOS from "aos";

const BlogPage = (props) => {



    useEffect(()=>{

        setTimeout(()=>{
            document.getElementById("desVid").style.display = "none"
            document.getElementById("mobVid").style.display = "none"
            document.getElementById("kotLoader").style.display = "none"
        }, 3000)
        AOS.init({
            once: true
        });

    }, [])


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