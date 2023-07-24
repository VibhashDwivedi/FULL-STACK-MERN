import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    phone: Yup.string()
    .required("Required")
    .matches(phoneRegExp,'Invalid Number')
     .min(10, "too short")
     .max(10, "too long"),
  email: Yup.string().email('Invalid email').required('Required'),
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
      onSubmit : (values) => {
        console.log(values); },

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
    <p className='error-label2'>{contactform.errors.name}</p>
    <input
      type="text"
      id=""
      placeholder="Full Name"
      className="myinput"
      name="name" 
      onChange={contactform.handleChange}
      value={contactform.values.name}
    
    />
    <p className='error-label2'>{contactform.errors.email}</p>
    <input type="email"  id="" className="myinput" placeholder="Email"  name="email" onChange={contactform.handleChange} value={contactform.values.email}  />
   <p className='error-label2'>{contactform.errors.phone}</p> <input type="number"  id="" className="myinput" placeholder="Phone"
     name="phone"
     onChange={contactform.handleChange}
     value={contactform.values.phone}/>
<input
          type="text"
          name="subject"
          id=""
          className="myinput"
          placeholder="Message Subject"
          onChange={contactform.handleChange}
          value={contactform.values.subject}
        />
      
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