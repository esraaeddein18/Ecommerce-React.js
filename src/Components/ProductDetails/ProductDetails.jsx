import React from 'react'
import style from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import Slider from 'react-slick';

export default function ProductDetails() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  let {id}=useParams();
  function getProductById(x){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x}`);
  }
  let {isLoading,isFetching,data}=useQuery('GetProductById',()=>getProductById(id))
  return <>
  <div className="mt-5 pt-5">
  <div className="row align-items-center p-2">
        <div className="col-md-4">
        <Slider {...settings}>
           {data?.data.data.images.map((imgSrc)=>(
            <img src={imgSrc} />
           ))}
    </Slider>
          {/* <img src={data?.data.data.imageCover} className='w-100' alt="" /> */}
        </div>

        <div className="col-md-8">
            <h5>{data?.data.data.description}</h5>
              <h2 className='text-main h6'>{data?.data.data.title}</h2>
              <span>{data?.data.data.category.name}</span>
              <div className='d-flex justify-content-between'>
                 <span className=' text-danger fs-4'>{data?.data.data.price} EGP</span>
                 <span className='text-warning fs-4' ><i className='fas fa-star rating-color'></i>{data?.data.data.ratingsAverage}</span>
              </div>
              
              <button className='btn bg-danger w-100 mt-3 mb-4 text-white fs-5'>Add To Cart</button>

        </div>
      </div>
  </div>

  </>
}
