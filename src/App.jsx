import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import Home from './pages/Home';
import {
    Route,
    Routes
} from "react-router-dom";

const App = () => (
    <div className='container'>
        <Navbar />
        <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/blog/:id' exact element={ <Blog /> } />
        </Routes>
    </div>
);

export default App;