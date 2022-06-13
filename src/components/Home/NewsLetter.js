import React from "react";

import Wrapper from "../Layouts/Wrapper";
import styles from "./NewsLetter.module.css";

function NewsLetter(){
    return (
        <Wrapper>
            <div className={styles.NewsLetter}>
                <div className={styles.columnLeft}>
                    <h2>Join our newsletter and get 20% off</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                </div>
                <div className={styles.columnRight}>
                    <form>
                        <input type="email" placeholder="Enter Your Email" name="email" />
                        <button>SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            
        </Wrapper>
    )
}

export default NewsLetter;