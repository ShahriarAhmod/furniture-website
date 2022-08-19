import React from 'react'

const Curosol = (props) => {
  const {id,price,slideImage,sliderSubtitle,sliderTitle}=props.item
    // console.log(props.item);
  return (
    
    <div className='slider slideWrap'>
        <div className="slider-info">
     <p className='slider-subtitle'>{sliderSubtitle}</p>
     <h1 className='slider-title'>{sliderTitle}</h1>
     <a href="" className='slider-btn'>DISCOVER NOW</a>
        </div>
        <div className="slider-media">
        <img src={slideImage} alt={sliderTitle } className="slider-img" />
      
        </div>
    </div>
    
    )
}

export default Curosol
