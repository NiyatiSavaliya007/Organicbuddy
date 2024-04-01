import React,{useEffect,useState} from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Container from '../components/Container';
import { useDispatch ,useSelector} from "react-redux";
import { getAllProducts } from '../features/products/productSlice';
const OurStore = () => {
    const [grid ,setGrid] = useState(4);
    const productState = useSelector((state)=>state?.product?.product);
    const dispatch = useDispatch();
    useEffect(()=>{
        getProducts();
    },[]);
    const getProducts = ()=>{
        dispatch(getAllProducts());
    };
  return (
   <>
   <Meta title={"Our Store"}/>
    <BreadCrumb title="Our Store"/>
    <Container class1="store-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Shop By Categories</h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Vegetables</li>
                                <li>Fruits</li>
                                <li>Grains</li>
                                <li>Beans</li>
                                <li>Lentils</li>
                                <li>Flours</li>
                                <li>Herbs</li>
                                <li>Dairy Products</li>
                            </ul>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Filter By</h3>
                        <div>
                            <h5 className='sub-title'>Availability</h5>
                            <div>
                                <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id=""/>
                                <label htmlFor="" className='form-check-label'>In Stock (1)</label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id=""/>
                                <label htmlFor="" className='form-check-label'>Out of Stock (0)</label>
                            </div>
                            </div> 
                            <h5 className='sub-title'>Price</h5>
                            <div className='d-flex align-items-center gap-10'>
                                <div className='form-floating'>
                                    <input className='form-control' type='text' placeholder='From' aria-label="Small"id='floatingInput'/>
                                    <label htmlFor='floatingInput'>From</label>
                                </div>
                                <div className='form-floating'>
                                    <input className='form-control' type='text' placeholder='To' id='floatingInput1'/>
                                    <label htmlFor='floatingInput'>To</label>
                                </div>
                            </div>
                            <h5 className='sub-title'>Type</h5>
                            <div>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id="v1"/>
                                <label htmlFor="" className='form-check-label'>Leafy Greens</label>
                            </div> 
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id="v2"/>
                                <label htmlFor="" className='form-check-label'>Cruciferous Vegetables</label>
                            </div>  
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id="v3"/>
                                <label htmlFor="" className='form-check-label'>Root Vegetables</label>
                            </div> 
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id="v4"/>
                                <label htmlFor="" className='form-check-label'>Allium Vegetables</label>
                            </div> 
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id="v5"/>
                                <label htmlFor="" className='form-check-label'>Gourds and Squashes</label>
                            </div> 
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id="v6"/>
                                <label htmlFor="" className='form-check-label'>Tubers</label>
                            </div> 
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id="v7"/>
                                <label htmlFor="" className='form-check-label'>Nightshade Vegetables</label>
                            </div> 
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value="" id="v8"/>
                                <label htmlFor="" className='form-check-label'>Cucurbitaceous Vegetables</label>
                            </div> 
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Product Tags</h3>
                        <div>
                            <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Fruits</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Vegetables</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Beans</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Herbs</span>
                                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Grains</span>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Random Product</h3>
                        <div>
                            <div className='random-products mb-3 d-flex'>
                                <div className='w-50'>
                                    <img src='../images/fruit/apple.jpg' alt='product' className='img-fluid'/>
                                </div>
                                <div className='w-50'>
                                    <h5> Headings must have content and the content must be accessible</h5>
                                    <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>

                                    <b>₹200</b>
                                </div>
                            </div>
                            <div className='random-products d-flex'>
                                <div className='w-50'>
                                    <img src='../images/fruit/apple.jpg' alt='product' className='img-fluid'/>
                                </div>
                                <div className='w-50'>
                                    <h5> Headings must have content and the content must be accessible</h5>
                                    <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"/>

                                    <b>₹200</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="filter-sort-grid">
                        <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-10"> 
                            <p className="mb-0 d-block" style={{width:"100px"}}>Sort By:   </p>
                            <select name="" className="form-control form-select" id="">
                                <option value="best-selling"> Best selling</option>
                                <option value="title-ascending">Alphabetically, A-Z</option> 
                                <option value="title-descending">Alphabetically, Z-A</option>
                                <option value="price-ascending">Price, low to high</option> 
                                <option value="price-descending">Price, high to low</option> 
                                <option value="created-ascending">Date, old to new</option> 
                                <option value="created-descending">Date, new to old</option> 
                            </select>
                        </div>
                            <div className="d-flex align-items-center gap-10">
                                <p className="totalproducts mb-0">21 Products</p>
                                <div className="d-flex gap-10 align-items-center grid"> 
                                    <img onClick={()=>{setGrid(3);}} src="../images/gr4.svg" className="d-block img-fluid" alt="grid"/>
                                    <img onClick={()=>{setGrid(4);}} src="../images/gr3.svg" className="d-block img-fluid" alt="grid"/>
                                    <img onClick={()=>{setGrid(6);}} src="../images/gr2.svg" className="d-block img-fluid" alt="grid"/>
                                    <img onClick={()=>{setGrid(12);}} src="../images/gr.svg" className="d-block img-fluid" alt="grid"/>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className='product-list pb-5'>
                        <div className='d-flex gap-10 flex-wrap pt-2'>
                        <ProductCard data={productState ? productState :[]} grid={grid}/>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
   </>
  );
};

export default OurStore;