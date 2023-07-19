import React from 'react'
const Login = () => {
  return (
    <div className='bg-info'>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='card  card-shadow-lg mb-5' style={{width:'350px'}}>
          <div className='card-body p-4'>
          <i className='fa-solid fa-lock fa-2x d-block text-center'></i>
            <h3 className='text-center'>Login</h3>
            <form>
              <div className='form-group py-2'>
                <label for='Email'>Email address</label>
                <input type='email' className='form-control mb-4 p-2' id='Email' required placeholder='Enter email' />
                <label for='pass'>Password</label>
                <input type='password' className='form-control mb-4 p-2' id='pass' placeholder='Enter Password'/>
                <div class="d-flex justify-content-between align-items-center">
            
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>
              </div>
            </form>
            <button className='btn btn-primary w-100 rounded-5'>SIGN IN</button>

           <p className='text-center mt-3'>or sign in with</p>
            <div className='d-flex justify-content-center'>
            <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
          </div>
           
           
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login