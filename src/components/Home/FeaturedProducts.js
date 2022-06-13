import React from "react";
import Wrapper from "../Layouts/Wrapper";

import styles from "./FeaturedProducts.module.css";
import FP_1 from "../../img/FP_1.jpg";
import FP_2 from "../../img/FP_2.jpg";
import FP_3 from "../../img/FP_3.jpg";

const featuredProductsList = [
    {
        id: 1,
        image: FP_1,
        altDesc: "Featured Product 1",
        productName: "Entertainment Center",
        productCost: "$599.99"
    },
    {
        id: 2,
        image: FP_2,
        altDesc: "Featured Product 2",
        productName: "High-Back Bench",
        productCost: "$399.99"
    },
    {
        id: 3,
        image: FP_3,
        altDesc: "Featured Product 3",
        productName: "Modern Bookshelf",
        productCost: "$319.99"
    },
]

function FeaturedProducts(){

    return (
        <Wrapper bgColor="#f1f5f8">
            <section className={styles.FeaturedProducts}>
                <h2>Featured Products</h2>
                <div className={styles.underline}></div>
                <div className={styles.Products}>
                    {
                        featuredProductsList.map(featuredProduct => {
                            return <div key={featuredProduct.id} className = {styles.Product}>
                                        <div className={styles.ImgContainer}>
                                            <img src={featuredProduct.image} alt={featuredProduct.altDesc} />
                                        </div>
                                        <div className={styles.ProductDetails}>
                                            <p>{featuredProduct.productName}</p>
                                            <p class={styles.productCost}>{featuredProduct.productCost}</p>
                                        </div>
                                    </div>
                        })
                    }
                </div>
                <a href="/">View All Products</a>
            </section>
        </Wrapper>
    )
}

export default FeaturedProducts;