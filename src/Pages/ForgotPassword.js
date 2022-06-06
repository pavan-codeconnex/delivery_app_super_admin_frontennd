import React from 'react'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
  return (
    <div>

<div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner py-4">
         
          <div class="card">
            <div class="card-body">
              
              <div class="app-brand justify-content-center">
                 <a href="index.html" class="app-brand-link">
              <span class="app-brand-logo demo">
                <i class='bx bxs-package'></i>
              </span>
              <span class="app-brand-text demo menu-text fw-bolder ms-2">Delivery App</span>
            </a>
              </div>
              
              <h4 class="mb-2">Forgot Password? 🔒</h4>
              <p class="mb-4">Enter your email and we'll send you instructions to reset your password</p>
              <form id="formAuthentication" class="mb-3" action="#" method="POST">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autofocus
                  />
                </div>
                <Link to="/Dashboard"><button class="btn btn-primary d-grid w-100">Send Reset Link</button></Link>
              </form>
              <div class="text-center">
                <Link to="/" class="d-flex align-items-center justify-content-center">
                  <i class="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
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