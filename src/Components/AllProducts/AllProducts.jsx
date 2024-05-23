import React, { useState ,useEffect ,useContext} from 'react'
import style from '../AllProducts/AllProducts.module.css';
import '../../App.css';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContent';
import toast, { Toaster } from 'react-hot-toast';
//  REACT QUERY -> axios 
// TAN STACK -> CALLING API ASAAHL BKTEEER  
 
export default function AllProducts() {
   let {addProductToCart} =useContext(CartContext)
//   let [isLoading,setIsLoading]=useState(false);
//  let [AllProducts,setAllProducts]=useState([]);
//   async function getAllProducts() {
//     setIsLoading(true);
//     let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/products');
//     console.log(data.data);
//     setAllProducts(data.data);
//     setIsLoading(false)
// }

function getProducts(){
   return axios.get('https://ecommerce.routemisr.com/api/v1/products');
}
async function addToCart(id){
  
  let {data}=await addProductToCart(id);
   console.log(data);
   if(data.status=="success"){
    //  toaster  - >  react hot toast
   }
}

// KEY 
let {isLoading,isFetching,data,refetch}= useQuery('getAllProducts',getProducts);

// console.log(data?.data.data);

// useEffect(()=>{
 
//   getAllProducts();

// },[])


  return <>
   <h1>All Products</h1>
 {isLoading? <div className='d-flex justify-content-center align-items-center'>

 <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
 </div>:<div className="row mx-auto w-100">
      {data?.data.data.map((item)=>(
        <div key={item._id} className="col-md-3">
           <div className='product p-2'>
          <Link  to={`Product/${item._id}`}>
             <img src={item.imageCover} className='w-100 mb-3' alt={item.title} />
             <span className='text-danger text-decoration-none '>{item.category.name}</span>
             <h3 className='h6 text-decoration-none text-danger  mt-2'>{item.title.split(' ').join(' ' ).slice(0,20)}</h3>
             <p className='p text-danger'>{item.description.split(' ').join(' ' ).slice(0,25)}</p>
              <div className='d-flex justify-content-between text-decoration-none'>
              <span className='text-danger'>{item.price} <b className='text-danger text-decoration-none'>EGP</b></span>
                  <span className='text-danger'><i className="fa-solid fa-star text-warning"></i>{item.ratingsAverage}</span>
              </div>
           </Link>

              <button onClick={()=>addToCart(item._id)} className='btn bg-danger w-100 mt-3 mb-4 text-white fs-5'>Add To Cart</button>
           </div>
        </div>
      ))}
    </div>    }

 
  
  </>
}
