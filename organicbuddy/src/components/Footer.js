import React from 'react'
import {Link} from 'react-router-dom'
import { FaLinkedin,FaGithub,FaInstagram} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
   <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src='../images/newsletter.png' alt='newsletter' />
              <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group" >
  <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
  <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
</div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className="text-white mb-4">Contact Us</h4>
            <div>
              <address className='text-white fs-6'>
                Besides Amrut Institute, <br/>Toraniya, Junagadh <br/>
                PinCode: 362263
              </address>
              <a href='tel:+91 8140114045' className='mt-3 d-block mb-1 text-white'>
                +91 8140114045
              </a>
              <a href='mailto:niyatisavaliya89@gmail.com'className='mt-2 d-block mb-0 text-white'>
              niyatisavaliya89@gmail.com
              </a>
              <div className='social icons d-flex align-items-center gap-30 mt-4'>
                <a className='text-white' href=''>
                  <FaLinkedin className='fs-4'/>
                </a>
                <a className='text-white' href='#'>
                  <FaInstagram className='fs-4' />
                </a>
                <a className='text-white' href='#'>
                  <FaGithub className='fs-4'/>
                </a>
                <a className='text-white' href='#'>
                  <FaYoutube className='fs-4'/>
                </a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className="text-white mb-4">Information</h4>
            <div className='footer-links text-white d-flex flex-column'>
              <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link to="/refund-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link to="/shipping-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link to="/term-conditions" className='text-white py-2 mb-1'>Terms & Conditions</Link>
            </div>            </div>
          <div className='col-3'>
            <h4 className="text-white mb-4">Account</h4>
            <div className='footer-links text-white d-flex flex-column'>
              <Link to="/" className='text-white py-2 mb-1'>About Us</Link>
              <Link to="/" className='text-white py-2 mb-1'>Faq</Link>
              <Link to="/" className='text-white py-2 mb-1'>Contact</Link>
              <Link to="/" className='text-white py-2 mb-1'>Blogs</Link>
            </div>          
        </div>
          <div className='col-2'>
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className='footer-links text-white d-flex flex-column '>
              <Link to="/" className='text-white py-2 mb-1'>Fruits</Link>  
              <Link to="/" className='text-white py-2 mb-1'>Vegetables</Link>
              <Link to="/" className='text-white py-2 mb-1'>Grains</Link>  
              <Link to="/" className='text-white py-2 mb-1'>Beans</Link>
              <Link to="/" className='text-white py-2 mb-1'>Herbs</Link>
              <Link to="/" className='text-white py-2 mb-1'>Dairy Products</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}, Powered by Organic Buddies</p>
          </div>
        </div>
      </div>
    </footer>
   </>
  );
};

export default Footer