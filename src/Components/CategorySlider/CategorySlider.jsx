import React, { useEffect } from 'react'
import style from './CategorySlider.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import Slider from "react-slick";
export default function CategorySlider() {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2
  };
  function getAllCat(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
     
  }

  // useEffect
   
  let {isLoading,data}=useQuery('getAllCat',getAllCat);

  return <>
  <div className="container-fluid py-3">
      <h1 className='mb-4 text-center fs-1'>Category Slider</h1>

      <Slider {...settings}>
        {data?.data.data.map((cat)=>(
        <img key={cat._id} height={200} src={cat.image}  />
        ))} 
      </Slider>
  </div>
    
  </>
}
