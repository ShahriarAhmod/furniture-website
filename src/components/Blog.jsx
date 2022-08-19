import React from 'react'
import blog5 from '../images/blog5.webp'
import blog4 from '../images/blog4.webp'
import blog3 from '../images/blog3.webp'
import blog2 from '../images/blog2.webp'
import blog1 from '../images/blog1.webp'
const Blog = () => {
  return (
    <section id='blog'>
        <p>Updated Blog</p>
        <h2>Latest blogs</h2>
        <div className="blog-container">
            <div className="blog-card">
                <img src={blog1} alt="" className="blog-img" />
                <div className="blog-info">
                    <h4>The best way to predict the future is to create it</h4>
                    
                </div>
            </div>
            <div className="blog-card">
                <img src={blog2} alt="" className="blog-img" />
                <div className="blog-info">
                    <h4>The best way to predict the future is to create it</h4>
                    <p></p>
                </div>
            </div>
            <div className="blog-card">
                <img src={blog3} alt="" className="blog-img" />
                <div className="blog-info">
                    <h4>The best way to predict the future is to create it</h4>
                    <p></p>
                </div>
            </div>
            <div className="blog-card">
                <img src={blog4} alt="" className="blog-img" />
                <div className="blog-info">
                    <h4>The best way to predict the future is to create it</h4>
                    <p></p>
                </div>
            </div>
            <div className="blog-card">
                <img src={blog5} alt="" className="blog-img" />
                <div className="blog-info">
                    <h4>The best way to predict the future is to create it</h4>
                    <p></p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Blog