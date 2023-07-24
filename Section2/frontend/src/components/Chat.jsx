import React, { useState } from 'react'


const Chat = () => {

    const [Chat, setChat] = useState([])
    const addChat = (e)=>{
        //console.log(e.code);
        if(e.code === 'Enter')
        {
        console.log('chat added');
        let chat = e.target.value;
        if(!chat.trim())return;
          e.target.value="";
        setChat([...Chat,{chat:chat}]);
        console.log(Chat);
        }


    }
  return (
    <div>
        <h1 className='text-center fw-bold my-5 display-4 text-secondary'>Chat App</h1>
        <div className='container'>
            <div className='card down'>
                <div className='card-body fun ' >
                    <ul className='list-group float-end'>
                      {
                        Chat.map((item)=>(
                            
                            <p className='para'>{item.chat}</p> 
                        ))
                        
                      }  
                    </ul>
                </div>
                <div className='card-footer' >
                    <input type="text" className='form-control' onKeyDown={addChat}/>
                </div>
            </div> 
       
        
        </div>
    </div>
  )
}

export default Chat