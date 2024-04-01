import React from 'react'
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {
  return (
   <>
   <Container class1="home-wrapper-1 py-5 s1">
   <div className='row'>
          <div className='col-6' >
            <div className='main-banner position-relative'>
              <img className='img-fluid rounded-3' src="../images/main_banner.jpg" alt="main banner" />
              <div className='main-banner-content position-absolute'>
                <h4>Peel Back the Fun</h4>
                <h5>Oranges</h5>
                <p>Only ₹60 </p>
                <p>Taste the Tangy Revolution</p>
                <Link className='button' to='/'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='d-flex flex-wrap gap-15 justify-content-between align-items-center'>
            <div className='small-banner position-relative  '>
              <img className='rounded-3' src="../images/catbanner_1.jpg" alt="main banner" height='160px' width="300px"/>
              <div className='small-banner-content position-absolute'>
                <h4>Peel Back the Fun</h4>
                <h5>Oranges</h5>
                <p>Only ₹60 </p>
                <p>Taste the Tangy Revolution</p>
              </div>
            </div>
            <div className='small-banner position-relative  '>
              <img className='rounded-3' src="../images/catbanner_1.jpg" alt="main banner" height='160px' width="300px"/>
              <div className='small-banner-content position-absolute'>
                <h4>Peel Back the Fun</h4>
                <h5>Oranges</h5>
                <p>Only ₹60 </p>
                <p>Taste the Tangy Revolution</p>
              </div>
            </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='d-flex flex-wrap gap-15 justify-content-between align-items-center'>
            <div className='small-banner position-relative  '>
              <img className='rounded-3' src="../images/catbanner_1.jpg" alt="main banner" height='160px' width="300px"/>
              <div className='small-banner-content position-absolute'>
                <h4>Peel Back the Fun</h4>
                <h5>Oranges</h5>
                <p>Only ₹60 </p>
                <p>Taste the Tangy Revolution</p>
              </div>
            </div>
            <div className='small-banner position-relative  '>
              <img className='rounded-3' src="../images/catbanner_1.jpg" alt="main banner" height='160px' width="300px"/>
              <div className='small-banner-content position-absolute'>
                <h4>Peel Back the Fun</h4>
                <h5>Oranges</h5>
                <p>Only ₹60 </p>
                <p>Taste the Tangy Revolution</p>
              </div>
            </div>
            </div>
          </div>
        </div>
   </Container>
   <Container class1='home-wrapper-2 py-5'>
   <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              {
                services?.map((i,j)=>{
                  return(
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img  src={i.image} alt='services' />
                      <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
   </Container>
   <Container class1='home-wrapper-2 py-5'>
   <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <br/>
                  <h6>Fruits</h6>
                  <p>20 Items</p>
                </div>
                <img height="80px" src='../images/fruits.jpg' alt='Fruits' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <br/>
                  <h6>Vegetables</h6>
                  <p>20 Items</p>
                </div>
                <img height="80px" src='../images/vege.jpg' alt='Fruits' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <br/>
                  <h6>Grains</h6>
                  <p>20 Items</p>
                </div>
                <img height="80px" src='../images/grains.jpg' alt='Fruits' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <br/>
                  <h6>Beans</h6>
                  <p>20 Items</p>
                </div>
                <img height="80px" src='../images/beans.jpg' alt='Fruits' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <br/>
                  <h6>Flour</h6>
                  <p>20 Items</p>
                </div>
                <img height="80px" src='../images/flour.jpg' alt='Fruits' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <br/>
                  <h6>Lentils</h6>
                  <p>20 Items</p>
                </div>
                <img height="80px" src='../images/lentils.jpg' alt='Fruits' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <br/>
                  <h6>Herbs</h6>
                  <p>20 Items</p>
                </div>
                <img height="80px" src='../images/herbs.jpg' alt='Fruits' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <br/>
                  <h6>Dairy Products</h6>
                  <p>20 Items</p>
                </div>
                <img height="80px" src='../images/dairy.jpg' alt='Fruits' />
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
   </Container>
   <Container class1='special-wrapper py-5 home-wrapper-2' >
   <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
          <div className='row'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          </div>
        </div>
   </Container>
   <Container class1='marque-wrapper py-5' >
   <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
              <div className='mx-4 w-25'>
                <img src='../images/herbs.jpg' height="90px" alt='herbs'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='../images/herbs.jpg' height="90px" alt='herbs'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='../images/herbs.jpg' height="90px" alt='herbs'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='../images/herbs.jpg' height="90px" alt='herbs'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='../images/herbs.jpg'height="90px" alt='herbs'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='../images/herbs.jpg' height="90px" alt='herbs'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='../images/herbs.jpg' height="90px" alt='herbs'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='../images/herbs.jpg' height="90px" alt='herbs'/>
              </div>
            </Marquee>
            </div>    
          </div>
        </div>
   </Container>
  <Container class1='blog-wrapper py-5 home-wrapper-2'>
  <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
        </div>
  </Container>

   </>
  );
};

export default Home