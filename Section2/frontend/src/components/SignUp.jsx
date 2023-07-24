import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8,'Too Short!').required('Required'),
  });
 
  
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },

    onSubmit: (values) => {
       console.log(values); },

       validationSchema : SignupSchema
  });
  return (
    <div className="d-flex align-items-center justify-content-center  ">
 
    <div className="card my-4  p-3 bg-secondary text-white" style={{width:'450px', height:'550px'}}>
      <div className="card-body card-shadow-lg ">
        <h2 className="text-uppercase text-center mb-4 text-black">Create an account</h2>
        <form onSubmit={signupForm.handleSubmit}>
          
          <label className="form-label" htmlFor="form3Example1cg">
              Your Name
            </label>
            <p>{signupForm.errors.name}</p>
            <input
              type="text"
              id="form3Example1cg"
              className="form-control"
              name="name" onChange={signupForm.handleChange} value={signupForm.values.name}
            />
           
          
          
          <label className="form-label" htmlFor="form3Example3cg">
              Your Email
            </label>
            <p>{signupForm.errors.email}</p>
            <input
              type="email"
              id="form3Example3cg"
              className="form-control "
              name="email" onChange={signupForm.handleChange} value={signupForm.values.email}
            />
           
          
         
          <label className="form-label" htmlFor="form3Example4cg">
              Password
            </label>
            <p>{signupForm.errors.password}</p>
            <input
              type="password"
              id="form3Example4cg"
              className="form-control "
              name="password" onChange={signupForm.handleChange} value={signupForm.values.password} 
            />
           
          
          
           
          
          <div className="form-check d-flex mt-1 mb-3">
         
            <input
              className="form-check-input me-2"
              type="checkbox"
              defaultValue=""
              id="form2Example3cg"
            />
             <label className="form-check-label" htmlFor="form2Example3g">
              I agree to all statements in{" "}
              <a href="#!" className="text-body">
                <u>Terms of service</u>
              </a></label>
           
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-success  gradient-custom-4 text-body"
            >
              Register
            </button>
          </div>
          <p className="text-center text-muted mt-2 mb-0 text-white">
            Have an account?{" "}
            <a href="#!" className="fw-bold text-body text-white">
              <u>Login here</u>
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
  




    
  
  )
}

export default SignUp