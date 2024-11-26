import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div class="newsletter-main">
                <div class="container">
                    <div class="newsletter-inner-main">
                        <div class="newsletter-child">
                            <div class="newsletter-inner-child">
                                <span>Newsletter</span>
                                <div class="newsletter-serach">
                                    <input type="text" placeholder="Enter your email address" />
                                    <a href="#">
                                        <FaArrowRightLong />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="newsletter-child">
                            <div class="newsletter-inner-child">
                                <ul>
                                    <li><a href="#"><FaFacebookF className="news-icon" /></a></li>
                                    <li><a href="#"><FaTwitter className="news-icon" /></a></li>
                                    <li><a href="#"><FaGooglePlusG className="news-icon" /></a></li>
                                    <li><a href="#"><FaLinkedinIn className="news-icon" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="footer-main">
                <div class="container">
                    <div class="footer-inner-main">
                        <div class="footer-child">
                            <div class="footer-inner-child">
                                <p>Products</p>
                                <ul class="sub-footer">
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/> <span>Delivery</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>Top Rated</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>Best Sales</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>New Products</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>Legal Terms</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-child">
                            <div class="footer-inner-child">
                                <p>My Products</p>
                                <ul class="sub-footer">
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>My Account</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>Login</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>Shopping Cart</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>My Wishlist</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>Track Order</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-child">
                            <div class="footer-inner-child">
                                <p>Information</p>
                                <ul class="sub-footer">
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>Privacy and Cookie Policy</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>Serach Terms</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>Advanced Search</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>Contact Us </span></a>
                                    </li>
                                    <li>
                                        <a href="#"><MdOutlineKeyboardArrowRight className="footer-icon"/><span>Orders and Returns</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-child">
                            <div class="footer-inner-child">
                                <div class="footer-text">
                                    <img src="img/apparel.png" alt="" />
                                    <p>11-234 Lorem street, Los Angeles, California 12345 USA</p>
                                    <p>Phone : 0123 456 789 / 0123 456 788</p>
                                    <p>Email : sales@yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="botom-main">
                <div class="container">
                    <div class="botom-inner-main">
                        <div class="botom-child">
                            <div class="botom-inner-child">
                                <p>Copyright © 2019 ApparelPro. All rights reserved.</p>
                            </div>
                        </div>
                        <div class="botom-child">
                            <div class="botom-inner-child">
                                <div class="botom-text">
                                    <p><a href="#">FAQ</a></p>
                                    <p><a href="#">Shipping Rates</a></p>
                                    <p><a href="#">International Shipping</a></p>
                                    <p><a href="#">About us</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
