import React from "react";
import Main from "../components/Home/Main";
import Navigation from "../components/Layouts/Navigation";

function Home(){
    return (
        <div>
            <Navigation />
            <Main />
            <section>
                <h2>Featured Products</h2>
                <div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <p>Name of products</p>
                                <p>Amount</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <p>Name of products</p>
                                <p>Amount</p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <p>Name of products</p>
                                <p>Amount</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/">View All Products</a>
            </section>
        </div>
    )
}

export default Home;