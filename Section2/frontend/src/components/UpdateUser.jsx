import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const UpdateUser = () => {

    const { id } = useParams();

    const [userData, setuserData] = useState({});

    const fetchUserData = async () => {
        const res = await fetch("http://localhost:5000/user/getbyid/"+id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
    };

    useEffect(()=>{
        fetchUserData();
    }, []);

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
          name :'',
          email :'',
          password :''
      
        },
    
        onSubmit: async (values) => {
          console.log(values);
    
          //sending request to backend
          const res = await fetch('http://localhost:5000/user/update/'+id, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
              'Content-Type' : 'application/json'
            }
          });
          console.log(res.status);
    
          if(res.status === 200){
            Swal.fire({
               icon : 'success',
               title : 'Update Successful',
            });
          }else{
            Swal.fire({
              icon : 'error',
              title : 'Oops!!',
              text: 'Some Error Occured'
           });
          }
        },
      validationSchema: SignupSchema
      });


  return (
    <div>
        <h1 className='text-center'>Update User Data</h1>
        <h2>{id}</h2>
        <div className="d-flex align-items-center justify-content-center  ">
        <div className="card shadow-lg my-4  p-3 bg-primary text-white" style={{width:'430px', height:'380px',border:'none'}}>
        <div className="card-body  ">
        <h2 className="text-uppercase text-center mb-4 text-black">Update form</h2>
        <form onSubmit={signupForm.handleSubmit}>
          
          <label className="form-label" htmlFor="form3Example1cg">
              Your Name
            </label>
            <p className='error-label'>{signupForm.touched.name? signupForm.errors.name :''}</p>
            <input
              type="text"
              id="form3Example1cg"
              className="form-control"
              name="name" onChange={signupForm.handleChange} value={signupForm.values.name}
            />
           
          
          
          <label className="form-label" htmlFor="form3Example3cg">
              Your Email
            </label>
            <p className='error-label'>{signupForm.touched.email? signupForm.errors.email :''}</p>
            <input
              type="email"
              id="form3Example3cg"
              className="form-control "
              name="email" onChange={signupForm.handleChange} value={signupForm.values.email}
            />
           
          
         
          <label className="form-label" htmlFor="form3Example4cg">
              Password
            </label>
            <p className='error-label'>{signupForm.touched.password? signupForm.errors.password:''}</p>
            <input
              type="password"
              id="form3Example4cg"
              className="form-control "
              name="password" onChange={signupForm.handleChange} value={signupForm.values.password} 
            />
           
           
           
          
         
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-warning  gradient-custom-4 text-body mt-3"
            >
              Update
            </button>
          </div>
          
        </form>
      </div>
      </div>
    </div>
    </div>
  )
}

export default UpdateUser