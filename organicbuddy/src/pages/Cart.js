import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { RiDeleteBinLine } from "react-icons/ri";
import Container from '../components/Container';
import {Link} from "react-router-dom";

const Cart = () => {
  return (
    <>
    <Meta title={"Cart"}/>
    <BreadCrumb title="Cart"/>
    <Container class1='cart-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
                <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                    <h4 className='cart-col-1'>Product</h4>
                    <h4 className='cart-col-2'>Price</h4>
                    <h4 className='cart-col-3'>Quantity(In Kg)</h4>
                    <h4 className='cart-col-4'>Total</h4>
                </div>
                <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                   <div className='cart-col-1 gap-15 d-flex align-items-center'>
                        <div className='w-25'>
                            <img className='img-fluid' src="../images/fruit/apple.jpg" alt='product img'/>
                        </div>
                       <div className='w-75'>
                       <p>ABCD</p>
                        <p>Variety : ABCD</p>
                        <p>Type : ABCD</p>
                       </div>
                   </div>
                   <div className='cart-col-2'>
                    <h5 className='price'>₹200</h5>
                   </div>
                   <div className='cart-col-3 d-flex align-items-center gap-10'>
                    <div>
                        <input className='form-control' type='number' min={1} max={20} style={{"width":"70px"}} name='' id=''/>
                    </div>
                    <button className='del '>
                        <RiDeleteBinLine className='fs-3 pb-1 '/>
                    </button>
                   </div>
                   <div className='cart-col-4'>
                   <h5 className='price'>₹200</h5>
                   </div>
                </div>
                <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                   <div className='cart-col-1 gap-15 d-flex align-items-center'>
                        <div className='w-25'>
                            <img className='img-fluid' src="../images/fruit/apple.jpg" alt='product img'/>
                        </div>
                       <div className='w-75'>
                       <p>ABCD</p>
                        <p>Variety : ABCD</p>
                        <p>Type : ABCD</p>
                       </div>
                   </div>
                   <div className='cart-col-2'>
                    <h5 className='price'>₹200</h5>
                   </div>
                   <div className='cart-col-3 d-flex align-items-center gap-10'>
                    <div>
                        <input className='form-control' type='number' min={1} max={20} style={{"width":"70px"}} name='' id=''/>
                    </div>
                    <button className='del '>
                        <RiDeleteBinLine className='fs-3 pb-1 '/>
                    </button>
                   </div>
                   <div className='cart-col-4'>
                   <h5 className='price'>₹200</h5>
                   </div>
                </div>
            </div>
            <div className='col-12 py-2 mt-4'>
                <div className='d-flex justify-content-between align-items-baseline'>
                <Link to='/product' className='button'>Continue Shopping</Link>
                <div className='d-flex flex-column align-items-end'>
                    <h4>SubTotal : ₹400</h4>
                    <p>Shipping Calculated at checkout</p>
                    <Link to="/checkout" className='button'>Checkout</Link>
                </div>
                </div>
            </div>
          </div>
    </Container>
    </>

  )
}

export default Cart