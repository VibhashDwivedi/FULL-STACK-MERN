import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    phone: Yup.string()
    .required("Required")
    .matches(phoneRegExp, 'Phone number is not valid')
     .min(10, "too short")
     .max(10, "too long"),
  email: Yup.string().email('Invalid email').required('Required'),
  subject:Yup.string().required('Required'),
  msg:Yup.string().required('Required'),
});

const Contactform = () => {


    

    const contactform = useFormik({
        initialValues: {
          email:'',
          name:'',
          phone:'',
          subject:'',
          msg:''
      },
       onSubmit : async (values) => {
        console.log(values);
        //sending request to backend
        const res = await fetch("http://localhost:5000/contact/add",
        {method:'POST',
         body:JSON.stringify(values),
         headers:{
          'Content-Type': 'application/json'
         }   
      });
        
       console.log(res.status);
       if(res.status ===200){
       Swal.fire({
        icon:'success',
        title:'Thank You',
        text:'We will reach out to you soon'
       });
      }
  else{
    Swal.fire({
      icon:'error',
      title: 'Oops',
      text: 'Some error occured'
  });
  }
      
      
      },

        validationSchema: ContactSchema
    });


  return (
    <div className='mybody vh-100'>
    <div className='container'>
    <div className='d-flex'>  
    
  <div className="mycard1">
    <div className="heading">
      <h1 id="he">Get In Touch</h1>
      <p>We are looking Forward to hear from you!</p>
    </div>
    <div className="smallcard">
      <img src="location.png" alt="" height="20px" />
      <h3>Our Main Office</h3>
      <p>94 BroadWay, New York</p>
      <img src="phone.png" alt="" height="30px" />
      <h3>Phone Number</h3>
      <p>883-5513-1113</p>
      <img src="email.png" alt="" height="30px" />
      <h3>Email</h3>
      <p>xyz@gmail.com</p>
    </div>
  </div>
  
  <div className="mycard mt-4">
    <h1>Contact Us</h1>
    <form onSubmit={contactform.handleSubmit}>
    <label className="my-1 mx-4">Full Name</label>
    <p className='error-label2'>{contactform.touched.name?contactform.errors.name:''}</p>
    <input
      type="text"
      id=""
      placeholder="Full Name"
      className="myinput"
      name="name" 
      onChange={contactform.handleChange}
      value={contactform.values.name}
    
    />

<label className="my-1 mx-4">Email</label>
    <p className='error-label2'>{contactform.touched.email?contactform.errors.email:''}</p>
    <input type=""  id="" className="myinput" placeholder="Email"  name="email" onChange={contactform.handleChange} value={contactform.values.email}  />
    <label className="my-1 mx-4">Phone</label>
   <p className='error-label2'>{contactform.touched.phone?contactform.errors.phone:''}</p> 
   <input type="number"  id="" className="myinput" placeholder="Phone"
     name="phone"
     onChange={contactform.handleChange}
     value={contactform.values.phone}/>

<label className="my-1 mx-4">Subject</label>
<p className='error-label2'>{contactform.touched.subject?contactform.errors.subject:''}</p>
<input
          type="text"
          name="subject"
          id=""
          className="myinput"
          placeholder="Message Subject"
          onChange={contactform.handleChange}
          value={contactform.values.subject}
        />
      <label className="my-1 mx-4">Message</label>
      <p className='error-label2'>{contactform.touched.msg?contactform.errors.msg:''}</p>
        <textarea
          className="myinput"
          name="msg"
          id=""
          cols="30"
          rows="2"
          placeholder="Your Message Here"
          onChange={contactform.handleChange}
          value={contactform.values.msg}
        ></textarea>

    
    <button type='submit' className="mybtn">Submit</button>
    </form>
  </div>

</div>
    </div>
    </div>
  )
}

export default Contactform