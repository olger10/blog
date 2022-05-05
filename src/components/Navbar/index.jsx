import React from 'react';
import './style.css';
import {  Link } from "react-router-dom";
const Navbar = () =>{
    return (
        <header>
            <div className='menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog/:id">Blog</Link>
                </li>
            </div>
        </header>
    );
}
export default Navbar;