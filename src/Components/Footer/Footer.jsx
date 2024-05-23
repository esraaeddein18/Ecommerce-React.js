import React from 'react'
import style from './Footer.module.css';

export default function Footer() {
  return <>
      <div className="container-fluid bg-light text-white fs-3 vh-25 py-3 mt-5 px-5">
        <h3 className="text-black fs-4">Get the FreshCart app</h3>
        <p className='text' style={{color:'gray', fontSize:'17px'}} >we will send you a link ,open it on your phone to download the app</p>

        <div className="row d-flex">
          <div className="col-sm-10 mt-2">
                <input type="Email" placeholder='Email' className="form-control " id="Email" />
          </div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-danger">Share App Link</button>
          </div>
        </div>
        <div className="row py-5 ">
          <div className="col-sm-7  d-flex py-2" >
            <h3 className='px-1 text-body-secondary fs-4'>Payment Partners</h3>
            <i className="fa-brands fa-amazon-pay px-1 text-warning fs-1" style={{cursor:'pointer'}}></i>
            <i className="fa-brands fa-cc-paypal px-1 text-primary fs-1" style={{cursor:'pointer'}}></i>
            <i className="fa-brands fa-cc-visa px-1 text-success fs-1" style={{cursor:'pointer'}}></i>
            <i className="fa-brands fa-cc-stripe px-1 fs-1" style={{color:'blue',cursor:'pointer'}}></i>
          </div>
          <div className="col-sm-5 d-flex py-2">
            <h3 className='px-4 text-body-secondary fs-4'>Get deliveries With Freshcart</h3>
            <i className="fa-brands fa-google-play text-primary fs-3" style={{cursor:'pointer'}}></i>
          </div>
        </div>
      </div>
  </>
}
