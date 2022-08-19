import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'

const Product = ({product}) => {
  // console.log(product);
  
  return (
    <section id='product'>
            <div className="section-titles">
                <h4>Home Interior</h4>
                <h2>New Products</h2>
            </div>
        <div className="product-container">
{
  product&&product.map(pd=>{
    const {productImage,productName,productPrice,id}=pd
    return(
      <div className="card" key={id}>
  <img src={productImage} alt={productName} className="product-img" />
  <a href="" className="addToCart">
    <FiShoppingBag/> Add to cart
  </a>
  <div className="product-info">
    <p className="product-name">{productName}</p>
    <p className="product-price">${productPrice}.00</p>
  </div>
</div>
    )
  })
}
        </div>

    </section>
  )
}

export default Product