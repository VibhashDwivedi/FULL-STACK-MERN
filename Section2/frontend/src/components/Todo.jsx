import React from 'react'

const Todo = () => {

    const addToDo = (e)=>
    {
       //console.log(e.code);
       if(e.code==='Enter')
       {
          console.log('task added');
       }
    }

  return (
    <div>
        <h1 className='text-center fw-bold display-4 my-5'>ToDo App</h1>
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <input type="text" className='form-control' onKeyDown={addToDo} />
                </div>
                <div className='card-body'></div>
            </div>

        </div>
    </div>
  )
}

export default Todo