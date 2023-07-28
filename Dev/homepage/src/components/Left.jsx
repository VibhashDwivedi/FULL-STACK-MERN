import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Left = () => {
  return (
    <div>
         <div className='card card-shadow-lg'>
                    <div className="card-body ">
                        <h6 className='fw-bold'>DEV Community is a community of 1,106,019 amazing developers</h6>
                        <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                        <Link className="nav-link " to="/signup">
          <button className="btn btn-outline-primary fw-bold" style={{width:'100%'}}>
          Create Account
        </button>
          </Link>
          <NavLink className="nav-link" to="/login" >
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
  )
}

export default Left