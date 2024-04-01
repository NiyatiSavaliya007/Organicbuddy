import React , {useState} from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import { IoShuffleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Container from '../components/Container';


const SingleProduct = () => {
    const [orderedProduct,setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
    <Meta title={"Product Name"}/>
    <BreadCrumb title="Product Name"/>
    <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <div className='row'>
                <div className='col-6'>
                    <div className='main-product-image'>
                        <div>
                            <img src='../images/fruit/apple.jpg' alt='product'/>
                        </div>
                       
                    </div>
                    <div className='main-product-details'>
                    
                        <div className='d-flex align-items-center flex-row gap-15 pb-3'>
                                <h3 className='product-heading'>Quantity(In Kg) :</h3>
                                <div className='num'>
                                    <input type='number' name='' min={1} max={20} className='form-control' style={{width: "70px",height:"30px"}} id=''/>
                                </div>
                                <div className='d-flex align-items-center gap-30 ms-5'>
                                <button className="button border-0" type='submit' >Add to Cart</button>
                                <button className="button signup">Buy Now</button>
                            </div>
                            </div>
                          
                        </div>
                </div>
                <div className='col-6'>
                    <div className='main-product-details'>
                        <div className='border-bottom'>
                            <h3 className='title'>
                            Farmers can list their organic products,
                             fostering direct relationships with consumers.
                            </h3>
                        </div>
                        <div className='border-bottom py-3'>
                            <p className='price'>₹200</p>
                            <div className='d-flex align-items-center gap-10'>
                            <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>
                            <p className='mb-0 t-review'>( 2 Reviews )</p>
                            </div>
                            <a className='review-btn' href='#review'>Write a Review</a>
                        </div>
                        <div className='py-3'>
                            <div className='d-flex align-items-center gap-10 my-2'>
                                <h3 className='product-heading'>Type :</h3>
                                <p className='product-data'>Tubers</p>
                            </div>
                            <div className='d-flex align-items-center gap-10 my-2'>
                                <h3 className='product-heading'>Name :</h3>
                                <p className='product-data'>Apple</p>
                            </div>
                            <div className='d-flex align-items-center gap-10 my-2'>
                                <h3 className='product-heading'>Category :</h3>
                                <p className='product-data'>Fruit</p>
                            </div>
                            <div className='d-flex align-items-center gap-10 my-2'>
                                <h3 className='product-heading'>Tags :</h3>
                                <p className='product-data'>Apple</p>
                            </div>
                            <div className='d-flex align-items-center gap-10 my-2'>
                                <h3 className='product-heading'>Availability :</h3>
                                <p className='product-data'>In Stock</p>
                            </div>
                            <div className='d-flex align-items-center gap-10 my-2'>
                                <h3 className='product-heading'>Variety :</h3>
                                <p className='product-data'>Granny Smith</p>
                            </div>
                            <div className='d-flex align-items-center gap-10 my-2'>
                                <h3 className='product-heading'>Nutritions :</h3>
                                <p className='product-data'>Vitamin A , C</p>
                            </div>
                            <div className='d-flex align-items-center gap-10 my-2'>
                                <h3 className='product-heading'>Shipping And Returns :</h3>
                                <p className='product-data'>Free Shipping & Returns over ₹500 in <b>5-10 business days</b></p>
                            </div>
                            <div className='d-flex align-items-center gap-10 my-2'>
                                <h3 className='product-heading'>Copy Product Link :</h3>
                                <a href='javascript:void(0);' onClick={()=>{copyToClipboard("http://localhost:3000/product/:id");}}>Product Link</a>
                            </div>
                            <div className='d-flex align-items-center gap-15 pb-1'>
                            <div>
                                <a href=''><IoShuffleOutline className='fs-5 me-2' /> Add to Compare</a>
                            </div>
                            <div>
                                <a href=''><FaRegHeart className='fs-5 me-2' />Add to WishList</a>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    <Container class1='description-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                <h4>Description</h4>
               <div className='bg-white p-3'>
                <p>Welcome to [Your Website Name], 
                a pioneering platform connecting farmers directly with consumers, 
                revolutionizing the way we access fresh, organic produce. Say 
                goodbye to middlemen – our platform empowers farmers to showcase
                 their harvests, allowing you to discover and purchase the finest, 
                 locally sourced products.</p>
               </div>
               </div>
            </div>
    </Container>
    <Container  class1='reviews-wrapper home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                <h3 id='review'>Reviews</h3>
                   <div className='review-inner-wrapper'>
                   <div className='review-head d-flex justify-content-between align-items-end'>
                        <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                            <div className='d-flex align-items-center gap-10'>
                            <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>
                            <p className='mb-0'>Based on 2 Reviews</p>
                            </div>
                        </div>
                       {orderedProduct && (
                        <div>
                            <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                        </div>
                       )}
                    </div>
                    <div className='review-form py-4'>
                        <h4>Write a Review</h4>
                    <form action='' className='d-flex flex-column gap-15'>
                    <div>
                        <ReactStars count={5} size={24} value={4} edit={true} activeColor="#ffd700"/>
                    </div>
                  <div>
                    <textarea className="w-100 form-control" name='' id='' cols="30" rows="4" placeholder='Comments'></textarea>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button  className="button border-0">Submit Review</button>
                  </div>
                </form>
                    </div>
                    <div className='reviews mt-4'>
                        <div className='review'>
                            <div className='d-flex gap-10 align-items-center'>
                                <h6 className='mb-0'>Meera</h6>
                                <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>
                            </div>
                        <p className='mt-3'>
                            Feel free to mix and match or modify these suggestions based on your preferences. 
                            Check the availability of the domain names to ensure they align with your branding.
                             If you have specific themes or elements you'd like to include, let me know for 
                             more personalized suggestions!
                        </p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
    </Container>
     <Container class1='winter-wrapper py-5 home-wrapper-2'>
        <div className='row'>
        <div className='col-12'>
            <h3 className='section-heading'>Winter Special</h3>
          </div>
          <ProductCard />
        </div>
    </Container>
    </>
  )
}

export default SingleProduct