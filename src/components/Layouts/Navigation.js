import React from "react";

import { NavLink } from "react-router-dom";

function Navigation(){
    return (
        <nav>
            <header>
                <h1>E-Commerce</h1>
            </header>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Products</NavLink>
            </ul>
        </nav>
    )
}

export default Navigation;