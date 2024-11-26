import React from "react";
import Shopx from "./Shopx";

const Shop = () => {
    return (
        <>
            <div class="new-main">
                <div class="container">
                    <div class="new-main-text">
                        <div class="new-h2">
                            <p>  New Products</p>
                        </div>
                    </div>
                    <div class="new-inner-main">
                        <Shopx image={"img/new1.jpg"} name={"Puma Shoes"} price={"499"} />
                        <Shopx image={"img/new2.jpg"} name={"Mufler"} price={"599"} />
                        <Shopx image={"img/new3.jpg"} name={"Bag"} price={"449"} />
                        <Shopx image={"img/new4.jpg"} name={"Watch"} price={"499"} />
                        <Shopx image={"img/product1.jpg"} name={"Jeans"} price={"799"} />
                        <Shopx image={"img/product2.jpg"} name={"T-shits"} price={"399"} />
                        <Shopx image={"img/product3.jpg"} name={"Shorts"} price={"299"} />
                        <Shopx image={"img/product4.jpg"} name={"T-shits"} price={"199"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;