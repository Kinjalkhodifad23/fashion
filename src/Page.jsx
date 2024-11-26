import React from "react";
import { FaUser } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";

const Page = () => {
    return (
        <>
            <div class="man-main">
                <div class="container">
                    <div class="man-inner-main">
                        <div class="man-child">
                            <a href="#">
                                <img src="img/man1.jpg" alt="" />
                            </a>
                        </div>
                        <div class="man-child">
                            <a href="#">
                                <img src="img/man2.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="recent-main">
                <div class="container">
                    <div class="recent-main-text">
                        <div class="recent-h2">
                            <p> Recent Posts</p>
                        </div>
                    </div>

                    <div class="recent-inner-main">
                        <div class="recent-child">
                            <div class="recent-inner-child">
                                <a href="#">
                                    <img src="img/recent1.jpg" alt="" />
                                </a>
                                <div class="recent-text">
                                    <p> fashion</p>
                                    <FaUser className="recent-icon" /><span>Jhon Doe </span>
                                    <FaRegCalendarDays  className="recent-icon" /><span>17 Feb.2020</span>
                                </div>
                                <div class="recent-text1">
                                    <p>At vero eos et accusamus et iusto odio.</p>
                                    <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque. Laudantium totam.</span>
                                </div>
                            </div>
                        </div>
                        <div class="recent-child">
                            <div class="recent-inner-child">
                                <a href="#">
                                    <img src="img/recent2.jpg" alt="" />
                                </a>
                                <div class="recent-text">
                                    <p> lifestyle</p>
                                    <FaUser className="recent-icon"/><span>Jhon Doe </span>
                                    <FaRegCalendarDays  className="recent-icon" /><span>17 Feb.2020</span>
                                </div>
                                <div class="recent-text1">
                                    <p>Nemo enim ipsam voluptatem quia.</p>
                                    <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque. Laudantium totam.</span>
                                </div>
                            </div>
                        </div>
                        <div class="recent-child">
                            <div class="recent-inner-child">
                                <a href="#">
                                    <img src="img/recent3.jpg" alt="" />
                                </a>
                                <div class="recent-text">
                                    <p> unique</p>
                                    <FaUser className="recent-icon"/><span>Jhon Doe </span>
                                    <FaRegCalendarDays  className="recent-icon" /><span>17 Feb.2020</span>
                                </div>
                                <div class="recent-text1">
                                    <p>Et harum quidem rerum facilis estet.</p>
                                    <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque. Laudantium totam.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;