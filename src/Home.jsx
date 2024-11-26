import React from 'react'

const Home = () => {
    return (
        <>
            <div class="banar-main">
                <img src="img/banar.jpg" alt="" />
            </div>

            <div class="trendy-main">
                <div class="trendy-inner-main">
                    <div class="trendy-child">
                        <a href="#">
                            <img src="img/trendy1.jpg" alt="" />
                        </a>
                    </div>
                    <div class="trendy-child">
                        <a href="#">
                            <img src="img/trendy2.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="sale-main">

                <div class="sale-inner-main">
                    <div class="sale-child">
                        <a href="#">
                            <img src="img/sale1.jpg" alt="" />
                        </a>
                    </div>
                    <div class="sale-child">
                        <a href="#">
                            <img src="img/sale2.jpg" alt="" />
                        </a>
                    </div>
                    <div class="sale-child">
                        <a href="#">
                            <img src="img/sale3.jpg" alt="" />
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
