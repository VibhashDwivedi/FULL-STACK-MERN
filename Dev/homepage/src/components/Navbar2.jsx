import React from 'react'
import { Link } from 'react-router-dom'
import Relevant from './Relevant'

const Navbar2 = () => {
  return (
    <div>
           <div className="d-flex">
        
              <button className='btn  buttons fw-bold'>Relevant</button>
              
             <button className='btn  buttons'>Latest</button>
                <button className='btn  buttons'>Top</button>
              </div>
              <Relevant/>
    </div>
  )
}

export default Navbar2