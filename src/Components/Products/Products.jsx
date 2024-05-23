import React from 'react'
import style from './Products.module.css';

import {increase,decrease ,increaseByValue} from './../../Redux/CounterReducer';
import { useDispatch } from 'react-redux';

export default function Products() {

    let dispatch=  useDispatch();

  return <>
     <button onClick={()=>dispatch(increase())} className='btn bg-danger'>Increase</button>
     <button onClick={()=>dispatch(decrease())}  className='btn bg-danger'>Decrease</button>
     <button onClick={()=>dispatch(increaseByValue(100))}  className='btn bg-danger'>Inc By value</button>
  </>
}
