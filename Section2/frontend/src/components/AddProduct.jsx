import React from 'react';
import  { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const AddProductSchema = Yup.object().shape({
    product: Yup.string().required('Required'),
    company: Yup.string().required('Required'),
    deviceName: Yup.string().required('Required'),
    rating: Yup.number().required('Required'),
    price: Yup.number().required('Required'),
        
      });

 const addProductForm =  useFormik({
    initialValues: {
        product: '',
        company: '',
        deviceName:'',
        rating: '',
        price:'',
        image:'',
    },
    onSubmit: async (values) => {
        console.log(values);
         //sending request to backend
       const res = await fetch("http://localhost:5000/addproduct/add",
       {method:'POST',
        body:JSON.stringify(values),
        headers:{
         'Content-Type': 'application/json'
        } ,
 
       
     });
       
      console.log(res.status);
      if(res.status === 200){
       Swal.fire({
         icon:'success',
         title: 'Thank You',
         text: 'Product added successfully'
       });
     }else{
       Swal.fire({
         icon:'error',
         title: 'Oops',
         text: 'Some error occured'
     });
 
 
       }
 
      
 
 } ,
     validationSchema: AddProductSchema
 });






  return (
    <div className='d-flex justify-content-center bg-primary vh-90'>

<div className="card w-40 shadow-lg mt-3 mb-5">
    <div className="card-body p-4 px-5 rounded-5">
      <h3 className="text-center mb-4 ">Add New Product</h3>
      <form onSubmit={addProductForm.handleSubmit}>
        <label htmlFor="">Product</label>
        <p className='error-label'>{addProductForm.touched.product? addProductForm.errors.product :'' }</p>
        <input className="form-control mb-2" type="text"  name="product" onChange={addProductForm.handleChange} value={addProductForm.values.product}/>
        <label>Company</label>
        <p className='error-label'>{addProductForm.touched.company? addProductForm.errors.company :'' }</p>
        <input className="form-control mb-2" type="text" name="company" onChange={addProductForm.handleChange} value={addProductForm.values.company} />
        <label >Model</label>
        <p className='error-label'>{addProductForm.touched.deviceName? addProductForm.errors.deviceName :'' }</p>
        <input className="form-control mb-2" type="text" name="deviceName" onChange={addProductForm.handleChange} value={addProductForm.values.deviceName}/>
        <label >Rating</label>
        <p className='error-label'>{addProductForm.touched.rating? addProductForm.errors.rating :'' }</p>
        <input className="form-control mb-2" type="number"  name="rating" onChange={addProductForm.handleChange} value={addProductForm.values.rating}/>

        <label >Price</label>
        <p className='error-label'>{addProductForm.touched.price? addProductForm.errors.price :'' }</p>
        <input className="form-control mb-2" type="number" name="price" onChange={addProductForm.handleChange} value={addProductForm.values.price}/>
        <label >Image</label>
        <input className="form-control mb-2" type="file"  name="image" onChange={addProductForm.handleChange} value={addProductForm.values.image}/ >

        <button type='submit' className="btn btn-danger w-100  mt-2 mp-4 rounded-5">Add Product</button>
      </form>
    </div>
   </div>


    </div>
  )
}

export default AddProduct