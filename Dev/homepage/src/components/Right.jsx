import React from 'react'

const Right = () => {
  return (
   <div>
     <div className="card">
                
                <img className='image'src="https://res.cloudinary.com/practicaldev/image/fetch/s--sHHbPqt4--/c_limit,f_auto,fl_progressive,q_auto,w_500/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ylq17e4fm8gfs75ur7nf.jpg" alt="" />
            
               <div className="card-body">
               <a href="#/"> <h6 className='mt-2 fw-bold'>refine DEV Hackathon (24)</h6></a>
               <hr className='line'/>
               <a href="#/">Whatsapp Web Scraper- Find and Export Contacts!</a>
               <hr className="line" />
               <a href="#/">React-Analytics</a>
               <hr className="line" />
               <a href="#/">Compette: An online Competition platform to unleash hidden talents 🏆</a>
               <hr className="line" />
               <a href="#/">Create animations with keronote ui</a>
               <button className="btn btn-primary mt-1 fw-bold" style={{width:'100%'}}>
        Share your Project
      </button>
               <button className="btn btn-secondary fw-bold mt-2" style={{width:'100%'}}>
        See all posts
      </button>
               </div>
              </div>
              <div className="card mt-3">
                <div className="card-body">
                  <h6 className='fw-bold'>#discuss</h6>
                  <a href="#/">From Pencil to pixels: The Mesmerizing Evolution of Programming</a>
                  <button className="d-block py-0 px-1 btn btn-warning">New</button>   
                  <hr className="line" />               
                  <a href="#/">Hello, World!</a>
                  <button className="d-block py-0 px-1 btn btn-warning">New</button>   
                  <hr className="line" />  
                  <a href="/">Quo Vadis, Web Development</a>
                  <p style={{fontSize:'small'}}>2 comments</p>             
                </div>
              </div>
          </div>
   
  )
}

export default Right