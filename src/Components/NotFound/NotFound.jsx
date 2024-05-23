import React from 'react'
import style from './NotFound.module.css';
import img1 from '../../Assets/images/error.svg'
export default function NotFound() {
  return <>
<div className=" text-center">
    <img src={img1} alt='r'/>

      <h1 className='mt-0'>Oops, Page Not Found 404 Error!</h1>
      <btn className="btn btn-danger py-2 fw-bolder fs-4" style={{width:'200px'}}>Back to Home</btn>
    </div>  </>
}
