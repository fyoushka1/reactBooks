import React from 'react'

import Header from "./components/Header/Header";
import Home from "./page/Home/Home";
import Cart from "./page/Cart/Cart";
import {Route, Routes} from "react-router-dom";


import './scss/app.scss'

    function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
