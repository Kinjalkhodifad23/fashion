import React from 'react'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoIosCall,IoIosArrowDown  } from "react-icons/io";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div class="apparel-main">
                <div class="container">
                    <div class="apparel-inner-main">
                        <div class="apparel-child">
                            <div class="apparel-inner-child">
                                <div class="apparel-search">
                                    <input type="text" placeholder="Search entire store here.." />
                                    <a href="#">
                                        <button type="submit" class="btn-icon">
                                            <FaSearch />
                                            {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="apparel-child">
                            <div class="apparel-inner-child">
                                <img src="img/apparel.png" alt="" />
                            </div>
                        </div>

                        <div class="apparel-child">
                            <div class="apparel-inner-child">
                                <div class="apparel-text-main">
                                    <div class="apparel-text">
                                        <a href="#" className='apparel-icon1'>
                                            <IoIosCall /></a>
                                        <span> CALL US NOW+1 234-456-7890</span>
                                    </div>
                                    <div class="apparel-text">
                                        <a href="#" className='apparel-icon2'>
                                            <FaShoppingCart />
                                        </a>
                                        <span>MY CART </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="nav-main">
                <div class="container">
                    <div class="nav-inner-main">
                        <div class="nav-child">
                            <div class="nav-menu">
                                <ul class="main-menu">
                                    <li>
                                       <Link to="/"> Home</Link>
                                    </li>
                                    <li>
                                    <Link to="/page">Page <IoIosArrowDown className='nav-icon'/></Link>
                                        <ul class="sub-menu">
                                            <li>
                                                <a href="#">About us</a>
                                            </li>
                                            <li>
                                                <a href="#">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="#">404</a>
                                            </li>
                                            <li>
                                                <a href="#">Pricing</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/shop">Shop <IoIosArrowDown className='nav-icon'/></Link> 
                                        <ul class="mega-menu">
                                            <li>
                                                <a href="#">Fashion</a>
                                                <ul class="little-menu">
                                                    <li>
                                                        <a href="#">Man</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Woman</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Kids</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Accessories</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Jewellwery</a>
                                                <ul class="little-menu">
                                                    <li>
                                                        <a href="#">Rings</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Bracelets</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Neklaces</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Wedding bands</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Furniture</a>
                                                <ul class="little-menu">
                                                    <li>
                                                        <a href="#">Living room</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Kitchen</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Office</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Home decor</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Autoparts</a>
                                                <ul class="little-menu">
                                                    <li>
                                                        <a href="#">Engine parts</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Exhust parts</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Brake parts</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Body parts</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <li>
                                        <a href="#">Electronics <IoIosArrowDown className='nav-icon'/></a>
                                        <ul class="mega-menu1">
                                            <li>
                                                <a href="#">MOBILES</a>
                                                <ul class="little-menu1">
                                                    <li>
                                                        <a href="#">Apple</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Xiaomi</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">BlackBerry</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Lenovo</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">CAMERA</a>
                                                <ul class="little-menu1">
                                                    <li>
                                                        <a href="#">Lenses</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">DSLR</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Triponds</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Accessories</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li>
                                        <a href="#">Sports <IoIosArrowDown className='nav-icon'/></a>
                                        <ul class="sub-menu1">
                                            <li>
                                                <a href="#">Sports <IoIosArrowDown className='nav-icon'/></a>
                                                <ul class="mini-menu">
                                                    <li>
                                                        <a href="#">Cricket </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Badminton</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Footbol</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Books <IoIosArrowDown className='nav-icon'/></a>
                                                <ul class="mini-menu">
                                                    <li>
                                                        <a href="#">Academics </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Literature</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Business</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Accessories</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li>
                                       <Link to="/contact"> Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
