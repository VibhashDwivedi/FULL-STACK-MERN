import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div  style={{backgroundColor:'lightcyan', marginTop:'50px'}}>
    <div className='container ' >
        <div className="row">
            <div className="col-md-3 my-3">
                <div className='card card-shadow-lg'>
                    <div className="card-body ">
                        <h6 className='fw-bold'>DEV Community is a community of 1,106,019 amazing developers</h6>
                        <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                        <Link className="nav-link " to="signup">
          <button className="btn btn-outline-primary fw-bold" style={{width:'100%'}}>
          Create Account
        </button>
          </Link>
          <NavLink className="nav-link" to="login" >
            <button className='btn buttons2 mt-1' style={{width:'100%'}}>Log in</button>
          </NavLink>

                    </div>
                </div>
                <p className='link2 pt-4'><i class="fa-solid fa-house mx-3 " style={{color:'orange'}}></i>Home</p>
                <p className='link2'><span className='emoji '>📜</span>Listing</p>
                <p className='link2'><span className='emoji '>🎤</span>Podcast</p>
                <p className='link2'><span className="emoji ">🎥</span>Videos</p>
                <p className='link2'><span className="emoji ">🔖</span>Tags</p>
                <p className='link2'><span className="emoji ">💡</span>FAQ</p>
                <p className='link2'><span className="emoji ">📗</span>Forum Shop</p>
                <p className='link2'><i class="fa-solid fa-heart mx-3 " style={{color:'red'}}></i>Sponsers</p>
                <p className='link2'><i class="fa-solid fa-clipboard mx-3 "></i>About</p>
                <p className='link2'><span className="emoji ">📯</span>Contact</p>
                <p className='link2'><span className="emoji ">📖</span>Guide</p>
                <p  className='fw-bold mx-3 '>other</p>
                <p className='link2'><span className="emoji ">👍</span>Code of Conduct</p>
                <p className='link2'><span className="emoji ">🤓</span>Privacy Policy</p>
               <p className='link2'><span className="emoji ">👀</span>Terms of Use</p>
               <i class="fa-brands fa-twitter mx-3"></i>
               <i class="fa-brands fa-instagram "></i>
               <i class="fa-brands fa-github mx-3"></i>
               <i class="fa-brands fa-square-facebook"></i>
               <i class="fa-brands fa-twitch mx-3"></i>

            </div>
            <div className="col-md-6 my-3">
              <div className="d-flex">
                <button className='btn  buttons fw-bold'>Relevant</button>
                <button className='btn  buttons'>Latest</button>
                <button className='btn  buttons'>Top</button>
              </div>
             <div className="card mt-2">
             <img className='image2 mt-1' src="https://res.cloudinary.com/practicaldev/image/fetch/s--T0TbYt3u--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w82kdkj7bpeaponf17bq.png" alt="" />
              <div className="card-body ">
                
                 <div className="row">
                  <div className="col-md-1">
                <img className='image3' src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className='col-md' style={{fontSize:'small'}}><p className='d-inline fw-bold'>Ben Harper</p>
                <p>JUL 24</p></div>
                </div>
                <div className="container mx-4">
                  <h3 className='fw-bold'>Meme Monday</h3>
                  <div className='d-flex'>
                  <button className='btn buttons3 py-0 px-1' style={{fontSize:'14px', backgroundColor:'rgb(217,215,215)'}}>#discuss</button>
                  <button className='btn buttons3 py-0 px-1' style={{fontSize:'14px'}}>#jokes</button>
                  <button className='btn buttons3 py-0 px-1' style={{fontSize:'14px'}}>#watercolor</button>
                </div>
                <div className="d-flex mt-2">
                  💖👍😁😂...<p style={{fontSize:'14px'}}>14 reactions</p>
                  <p className='mx-5' style={{fontSize:'14px'}}><i class="fa-regular fa-comment"></i>20 Comments</p>
                <p style={{fontSize:'14px'}}>1 min read</p>
                <p className='mx-3'><i class="fa-regular fa-bookmark"></i></p>
                </div>
                </div>

                
                
              </div>
             
             </div>
              
             <div className="card mt-2">
             
                  <div className="card-body">
                  <p style={{fontSize:'14px'}}>DEV Community</p>
                  <div className="container ">
                    <img className="image4" src="https://res.cloudinary.com/practicaldev/image/fetch/s--DShyBF6_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7uc7wxj38mtlwqui4dvj.png" alt="" /></div>
                 <h5 className='m-3 fw-bold'>Need to stay up-to-date with the most relevant trends in software, such as generate AI, cloud computing, and all things frontend?</h5>
                 <p className='mx-3'>look no further</p>
                  <a href=""><h4 style={{color:'blue', textDecoration:'underline'}}className='m-3 fw-bolder'>Start Now</h4></a>
                  <p className='mx-3'>Happy Coding<i class="fa-solid fa-heart" style={{color: '#e90707'}}></i></p>
                  </div>
                </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card">
                
                  <img className='image'src="https://res.cloudinary.com/practicaldev/image/fetch/s--sHHbPqt4--/c_limit,f_auto,fl_progressive,q_auto,w_500/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ylq17e4fm8gfs75ur7nf.jpg" alt="" />
              
                 <div className="card-body">
                 <a href="#"> <h6 className='mt-2 fw-bold'>refine DEV Hackathon (24)</h6></a>
                 <hr className='line'/>
                 <a href="#">Whatsapp Web Scraper- Find and Export Contacts!</a>
                 <hr className="line" />
                 <a href="#">React-Analytics</a>
                 <hr className="line" />
                 <a href="#">Compette: An online Competition platform to unleash hidden talents 🏆</a>
                 <hr className="line" />
                 <a href="#">Create animations with keronote ui</a>
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
                    <a href="#">From Pencil to pixels: The Mesmerizing Evolution of Programming</a>
                    <button className="d-block py-0 px-1 btn btn-warning">New</button>   
                    <hr className="line" />               
                    <a href="#">Hello, World!</a>
                    <button className="d-block py-0 px-1 btn btn-warning">New</button>   
                    <hr className="line" />  
                    <a href="">Quo Vadis, Web Development</a>
                    <p style={{fontSize:'small'}}>2 comments</p>             
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home