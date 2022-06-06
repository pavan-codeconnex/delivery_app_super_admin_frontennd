import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
         <div class="container">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner">
       
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
    
              <h4 class="mb-2">Welcome to Delivery App! 👋</h4>
              <p class="mb-4">Please sign-in to your account and start the adventure</p>

              <form id="formAuthentication" class="mb-3" action="index.html" method="POST">
                <div class="mb-3">
                  <label for="email" class="form-label">Email or Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                    autofocus
                  />
                </div>
                <div class="mb-3 form-password-toggle">
                  <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">Password</label>
                    <Link to="/ForgotPassword">
                      <small>Forgot Password?</small>
                    </Link>
                  </div>
                  <div class="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember-me" />
                    <label class="form-check-label" for="remember-me"> Remember Me </label>
                  </div>
                </div>
                <div class="mb-3">
                  <Link to="/Dashboard"><button class="btn btn-primary d-grid w-100" type="submit">Sign in</button></Link>
                </div>
              </form>

              <p class="text-center">
                <span>New on our platform?</span>
                <Link to="/SignUp">
                  <span>Create an account</span>
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

export default Login