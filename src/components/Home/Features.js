import React from "react";

import Wrapper from "../Layouts/Wrapper";
import styles from "./Features.module.css";

const cardsData = [
    {
        id: 1,
        logo: <i class="fa-solid fa-bullseye"></i>,
        headLine: "Mission",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
    },
    {
        id: 2,
        logo: <i class="fa-solid fa-eye-low-vision"></i>,
        headLine: "Vision",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
    },
    {
        id: 3,
        logo: <i class="fa-solid fa-timeline"></i>,
        headLine: "History",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
    },

]

function Features(){
    return (
        <Wrapper bgColor = "#eaded7">
            <div className={styles.FeaturesHeader}>
                <h2>Custom Furniture Built Only For You</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
            </div>
            <div class={styles.Features}>
                {
                    cardsData.map(cardData => {
                        return <div className = {styles.FeatureCard}>
                            {cardData.logo}
                            <h3>{cardData.headLine}</h3>
                            <p>{cardData.description}</p>
                        </div>
                    })
                }
            </div>
        </Wrapper>
    )
}

export default Features;