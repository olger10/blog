import React from "react";
import BlogList from "../../components/BlogList";
import {blogList} from "../../components/data/data";

const Home = () => {
    return(
        <div>
            <h1>Home page pls</h1>
            <BlogList blogs={blogList}/>
        </div>

    );
};

export default Home;