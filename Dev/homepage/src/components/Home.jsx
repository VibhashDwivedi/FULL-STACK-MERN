import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import Left from './Left'
import Right from './Right'
import Relevant from './Relevant'
import Home2 from './Home2'


const Home = () => {
  return (



    <div  style={{backgroundColor:'lightcyan', marginTop:'50px'}}>
    <div className='container ' >
        <div className="row">
            <div className="col-md-3 my-3">
              <Left/>


            </div>
            <div className="col-md-6 my-3">
           <Home2/>
             
            </div>
            <div className="col-md-3 my-3">
             <Right/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Home