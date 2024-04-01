import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import Container from '../components/Container';


const Contact = () => {
  return (
  <>
     <Meta title={"Contact Us"}/>
    <BreadCrumb title="Contact Us"/>
    <Container class1='contact-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2210.4119672718916!2d70.55278991840885!3d21.431732646951392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2a9c185835357%3A0x47ac0d50a00205bf!2sAmrut%20Institute%20Junagadh!5e0!3m2!1sen!2sin!4v1705764825923!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" title='iframe' referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className="form-control" placeholder='Name'/>
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder='Email'/>
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder='Mobile Number'/>
                  </div>
                  <div>
                    <textarea className="w-100 form-control" name='' id='' cols="30" rows="4" placeholder='Comments'></textarea>
                  </div>
                  <div>
                    <button  className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaHome  className='fs-5'/>
                      <address className='mb-0'>Besides Amrut Institute, Toraniya, Junagadh, PinCode: 362263</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <IoCall className='fs-5'/>
                      <a href='tel:+91 8140114045'>+91 8140114045</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <IoIosMail className='fs-5'/>
                      <a href='mailto:niyatisavaliya89@gmail.com'>niyatisavaliya89@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <IoInformationCircle className='fs-5'/>
                      <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
                 
  </>
  )
}

export default Contact