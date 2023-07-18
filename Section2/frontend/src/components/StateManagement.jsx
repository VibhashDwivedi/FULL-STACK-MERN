import React, { useState } from 'react'

const StateManagement = () => {

   const [Likes, setLikes] = useState(0);
   const [Imgurl, setImgurl] = useState('');
    let count =10;
    const selectFile = (e)=>{
       const file =  e.target.files[0];
       console.log(file);
       //reading a file
       const reader = new FileReader();
       reader.onload = (data)=>{
        console.log(data.target.result);
        setImgurl(data.target.result);
       };
       reader.readAsDataURL(file);
    }
  return (
    <div>
        <div class="container">
            <h1> Count: {count}</h1>
            <button onClick={()=>{count++; console.log(count);}}>Add Count</button>
            <h1>Likes: {Likes}</h1>
            <button className='btn btn-primary' onClick={()=> {setLikes(Likes+1)}}>Like</button>
            <button className='btn btn-danger' onClick={()=> {setLikes(Likes-1)}}>Dislike</button>

            <input type="file" onChange={selectFile} /> 
            <img src={Imgurl} alt="" className='d-block w-50 m-auto'/>
        </div>
    </div>
  )
}

export default StateManagement