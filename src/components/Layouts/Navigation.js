import React from "react";

import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import Wrapper from "./Wrapper";

function Navigation(){
    return (
        <Wrapper>
            <nav class={styles.nav}>
                <header>
                    <h1 class={styles.heading}>E-<span>Commerce</span></h1>
                </header>
                <ul>
                    <li><NavLink activeClassName = "active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName = "active" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName = "active" to="/products">Products</NavLink></li>
                </ul>
            </nav>
        </Wrapper>
    )
}

export default Navigation;