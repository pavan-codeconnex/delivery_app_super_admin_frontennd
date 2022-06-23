import React from 'react'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
  return (
    <div>

<div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-4">
         
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
              
              <h4 className="mb-2">Forgot Password? <span role="img" aria-label="lock">🔒</span></h4>
              <p className="mb-4">Enter your email and we'll send you instructions to reset your password</p>
              <form id="formAuthentication" className="mb-3" action="#" method="POST">
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autofocus
                  />
                </div>
                <Link to="/Dashboard"><button className="btn btn-primary d-grid w-100">Send Reset Link</button></Link>
              </form>
              <div className="text-center">
                <Link to="/" className="d-flex align-items-center justify-content-center">
                  <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                  Back to login
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default ForgotPassword