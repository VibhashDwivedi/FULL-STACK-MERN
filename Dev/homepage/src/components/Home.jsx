import React from 'react'
import { NavLink } from 'react-router-dom'

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
                        <NavLink className="nav-link " to="signup">
          <button className="btn btn-outline-primary fw-bold" style={{width:'100%'}}>
          Create Account
        </button>
          </NavLink>
          <NavLink className="nav-link text-center my-2" to="login" >
            Log in
          </NavLink>

                    </div>
                </div>
                <p className='pt-4'><i class="fa-solid fa-house mx-3 "></i>Home</p>
                <p><i class="fa-solid fa-scroll mx-3"></i>Listing</p>
                <p><i class="fa-solid fa-microphone mx-3"></i>Podcast</p>
                <p><i class="fa-solid fa-video mx-3"></i>Videos</p>
                <p><i class="fa-solid fa-tag mx-3"></i>Tags</p>
                <p><i class="fa-solid fa-lightbulb mx-3"></i>FAQ</p>
                <p><i class="fa-solid fa-paragraph mx-3"></i>Forum Shop</p>
                <p><i class="fa-solid fa-heart mx-3"></i>Sponsers</p>
                <p><i class="fa-solid fa-clipboard mx-3"></i>About</p>
                <p><i class="fa-solid fa-address-book mx-3"></i>Contact</p>
                <p><i class="fa-solid fa-book-open mx-3"></i>Guide</p>
                <p className='fw-bold mx-3'>other</p>
                <p><i class="fa-solid fa-thumbs-up mx-3" style={{color: 'yellow'}}></i>Code of Conduct</p>
                <p><i class="fa-solid fa-lock mx-3"></i>Privacy Policy</p>
               <p><i class="fa-solid fa-list-ul mx-3"></i>Terms of Use</p>
               <i class="fa-brands fa-twitter mx-3"></i>
               <i class="fa-brands fa-instagram "></i>
               <i class="fa-brands fa-github mx-3"></i>
               <i class="fa-brands fa-square-facebook"></i>
               <i class="fa-brands fa-twitch mx-3"></i>

            </div>
            <div className="col-md-6">Home</div>
            <div className="col-md-3">Home</div>
        </div>
    </div>
    </div>
  )
}

export default Home