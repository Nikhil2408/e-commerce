import React from "react";
import Wrapper from "../Layouts/Wrapper";

import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import home_hero_image from "../../img/home_hero_image.jpeg";

function Main(){
    return (
        <Wrapper>
            <div class={styles.hero}>
                <div className={styles.heroContainer}>
                    <h2>Design Your Comfort Zone</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus distinctio pariatur quod consequatur hic molestiae? Dolor architecto repellat eum quod voluptas exercitationem suscipit ab. Id laborum eum eius totam, adipisci nobis nihil! Quis similique modi sapiente sint voluptates minus dolor!</p>
                    <Link to="#">Shop Now</Link>
                </div>
                <div class={styles.heroImgContainer}>
                    <img src={home_hero_image} alt="" />
                </div>
            </div>
        </Wrapper>
    )
}

export default Main;