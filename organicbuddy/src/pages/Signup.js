import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useDispatch } from "react-redux";
import { useFormik} from 'formik';
import * as yup from 'yup';
import { registerUser } from '../features/user/userSlice';
const signupSchema = yup.object({
  name:yup.string().required("Name is Required"),
  email:yup.string().email("Email Should be valid").required("Email is Required"),
  mobile:yup.string().required("Mobile is Required"),
  password:yup.string().required("Password is Required"),
});
const Signup = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name:"",
      email:"",
      mobile:"",
      password:"",
    },
    validationSchema: signupSchema,
    onSubmit:(values)=>{
      dispatch(registerUser(values));
    },
  });
  return (
   <>
    <Meta title={"Sign Up"}/>
    <BreadCrumb title="Sign Up"/>
    <Container class1='login-wrapper py-5 home-wrapper-2'>
      <div className='row'>
        <div className='col-12'>
          <div className='auth-card'>
            <h3 className='text-center mb-3'>Sign Up</h3>
            <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-20'>
              <CustomInput 
              type="text" 
              name='name' 
              placeholder='Name' 
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")} />
              <div className='error'>
                {formik.touched.name && formik.errors.name}
              </div>
              <CustomInput 
              type="email" 
              name='email' 
              placeholder='Email'  
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")} />
              <div className='error'>
                {formik.touched.email && formik.errors.email}
              </div>
              <CustomInput 
              type="tel" 
              name='mobile' 
              placeholder='Mobile Number'  
              value={formik.values.mobile} 
              onChange={formik.handleChange("mobile")}
              onBlur={formik.handleBlur("mobile")} />
              <div className='error'>
                {formik.touched.mobile && formik.errors.mobile }
              </div>
              <CustomInput 
              type="password" 
              name='password' 
              placeholder='Password' 
              className='mt-0' 
              value={formik.values.password} 
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")} />
              <div className='error'>
                {formik.touched.password && formik.errors.password}
              </div>
              
              <div>
                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                  <button type='submit' className='button border-0'>Sign Up</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
   </>
  )
}

export default Signup