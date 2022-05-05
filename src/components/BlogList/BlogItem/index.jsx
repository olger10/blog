import React from "react";
import './style.css';
import {Link} from "react-router-dom";

const BlogItem = ({blog:{id, cover, title, autor, description},}) => {
    return(
        <div className="blogItem-wrap">
            <img src={cover} alt="cover"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/blog/${id}`}>Më shumë</Link>
        </div>
    );
};

export default BlogItem;