import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare Products"}/>
    <BreadCrumb title="Compare Products"/>
    <Container class1="compare-product-wrapper py-5 home-wrapper-2"> 
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                    <img src="../images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
                    <div className="product-card-image">
                        <img height="214px" src="../images/fruit/apple.jpg" alt="product" /> 
                    </div>
                    <div className="compare-product-details"> 
                        <h5 className="title">Crisp and Juicy Elegance: The Apple's Exquisite Tale</h5>
                        <h6 className="price mb-3">₹300</h6>
                        <div >
                            <div className='product-detail'>
                                <h5>Name :</h5>
                                <p>Apple</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type :</h5>
                                <p>Tubers</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availability :</h5>
                                <p>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Variety :</h5>
                                <p>Granny Smith</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Nutrition :</h5>
                                <p>Vitamin A , C</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                    <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
                    <div className="product-card-image">
                        <img height="214px" src="../images/fruit/apple.jpg" alt="product" /> 
                    </div>
                    <div className="compare-product-details"> 
                        <h5 className="title">Crisp and Juicy Elegance: The Apple's Exquisite Tale</h5>
                        <h6 className="price mb-3">₹300</h6>
                        <div >
                            <div className='product-detail'>
                                <h5>Name :</h5>
                                <p>Apple</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type :</h5>
                                <p>Tubers</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availability :</h5>
                                <p>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Variety :</h5>
                                <p>Granny Smith</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Nutrition :</h5>
                                <p>Vitamin A , C</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  );
};

export default CompareProduct