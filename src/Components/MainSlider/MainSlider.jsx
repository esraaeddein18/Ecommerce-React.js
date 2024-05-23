import React from 'react'
import style from './MainSlider.module.css';
import BannerOne from '../../Assets/bg-3.jpg'
import BannerTwo from '../../Assets/bg-2.jpg'

import Slider from 'react-slick';
export default function MainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return <>
     <h2>Main Slider</h2>
     <div className="row">
      <div className="col-md-12">
      <Slider {...settings}>
           <img src={BannerOne} alt="" />
           <img src={BannerTwo} alt="" />
        </Slider>  
      </div>
     </div>
  </>
}
