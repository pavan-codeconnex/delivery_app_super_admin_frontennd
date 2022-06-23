import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div>
         <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
        
          <div className="card">
            <div className="card-body">
             
              <div className="app-brand justify-content-center">
               <a href="index.html" className="app-brand-link">
              <span className="app-brand-logo demo">
                <i className='bx bxs-package'></i>
              </span>
              <span className="app-brand-text demo menu-text fw-bolder ms-2">Delivery App</span>
            </a>
              </div>
            
              <h4 className="mb-2">Adventure starts here <span role="img" aria-label="rocket">🚀</span></h4>
              <p className="mb-4">Make your app management easy and fun!</p>

              <form id="formAuthentication" className="mb-3" action="#" method="POST">
                <div className="mb-3">
                  <label for="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    autofocus
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3 form-password-toggle">
                  <label className="form-label" for="password">Password</label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                    <label className="form-check-label" for="terms-conditions">
                      I agree to
                      <a href="javascript:void(0);">privacy policy & terms</a>
                    </label>
                  </div>
                </div>
                <Link to="/Dashboard"><button className="btn btn-primary d-grid w-100">Sign up</button></Link>
              </form>

              <p className="text-center">
                <span>Already have an account?</span>
                <Link to="/">
                  <span>Sign in instead</span>
                </Link>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    </div>
  )
}

export default SignUp