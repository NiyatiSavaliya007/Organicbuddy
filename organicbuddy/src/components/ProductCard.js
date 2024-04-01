import React from 'react'
import ReactStars from 'react-rating-stars-component';
import {Link ,useLocation} from 'react-router-dom';
import { useDispatch} from "react-redux";
import { addToWishlist } from '../features/products/productSlice';

const ProductCard = (props) => {
    const {grid,data}=props;
    const dispatch = useDispatch();

    let location = useLocation();
   const addToWish = (id)=>{
    console.log(id);
    dispatch(addToWishlist(id));
   }
  return (
  <>
  {
    data?.map((item,index)=>{
        return (
            <div key={index} className={`${location.pathname === "/product" ? `gr-${grid}` :"col-3"}`}>
            <Link
            to={`${location.pathname === "/"? "product/:id" : ":id"}`} 
             className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <button className='border-0 bg-transparent' onClick={(e)=>{addToWish(item?._id);}}>
                        <img src='../images/wish.svg' alt='wishlist'/>
                    </button>
                </div>
                <div className='product-image'>
                    <img className='' width="260px" height="214px" src={item?.images[0].url}  alt='product' />
                </div>
                <div className='product-details'>                
                    <h6 className='name'>{item?.title}</h6>
                    <h5 className='description'>{item?.variety}</h5>
                    <ReactStars count={5} size={24} value={item?.totalrating.toString()} edit={false} activeColor="#ffd700"/>
                    <p className={`advantage ${grid === 12 ? "d-block" :"d-none"}`}>
                    {item?.description}  
                    </p>
                    <p className='price'>₹ {item?.price}</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column'>
                        <button className='border-0 bg-transparent'>
                            <img src='../images/prodcompare.svg' alt='compare'/>
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src='../images/view.svg' alt='view'/>
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src='../images/add-cart.svg' alt='addcart'/>
                        </button>
                    </div>
                </div>
            </Link>
        </div>
        )
    })
  }
   
  </>
  );
};

export default ProductCard