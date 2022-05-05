import React, {useEffect, useState} from "react";
import './style.css';
import { useParams } from "react-router-dom";
import { blogList } from "../../components/data/data";

const Blog = () => {
    const {id}=useParams();
    const [blog, setBlog] = useState(null);
    useEffect( () =>{
            let blog = blogList.find(blog => blog.id === parseInt(id));
            if(blog){
                setBlog(blog);
            }
        }, [])

    return(
        <div>
           {
               blog ? (
                   <div className="blog-article">
                       <img src={blog.cover} alt="cover" />
                       <span>{blog.category}</span>
                       <h2> {blog.title} </h2>
                       <p>{blog.description}</p>
                   </div>
               ):null
           }
        </div>
    );
};

export default Blog;