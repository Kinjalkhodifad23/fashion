import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { Link } from "react-router-dom";

const Shopx = (i) => {
    return (
        <>

            <div class="new-child">
                <div class="new-inner-child">
                    <a href="#">
                        <img src={i.image} alt="" />
                    </a>
                    <div class="new-icon">
                        <Link to=""><FaShoppingCart /></Link>
                        <Link to=""><FaHeart /></Link>
                        <Link to=""><IoStatsChart /></Link>
                    </div>
                    <div class="new-text">
                        <p>{i.name} </p>
                        <strong><p>{i.price}</p></strong>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Shopx;