import React from 'react'
import img1 from '../images/home-shop-classic-01.png'
import img2 from '../images/home-shop-classic-02.png'
import img3 from '../images/home-shop-classic-03.png'
const Categories = () => {
    return (
        <section className='categories'>
            <div className="categories-container">
            <div className="categories-product">
                    <img src={img1} alt="" width="150px" />

                    <div className="categories-info">
                        <h6 className="product--subtitle">

                            INNOVATIVE
                        </h6>
                        <h2>
                            Morden
                            <span>chair</span>
                        </h2>
                    </div>
            </div>
            <div className="categories-product">
                    <img src={img2} alt="" width="150px" />

                    <div className="categories-info">
                        <h6 className="product-subtitle">

                            INNOVATIVE
                        </h6>
                        <h2>
                            Morden
                            <span>chair</span>
                        </h2>
                    </div>
            </div>
            <div className="categories-product">
                    <img src={img3} alt="" width="150px" />

                    <div className="categories-info">
                        <h6 className="product--subtitle">

                            INNOVATIVE
                        </h6>
                        <h2>
                            Morden
                            <span>chair</span>
                        </h2>
                    </div>
            </div>

            </div>
        </section>
    )
}

export default Categories