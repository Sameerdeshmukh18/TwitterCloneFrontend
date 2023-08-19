import React from 'react';
import "./Login.css"

function Login() {
  return (
    <div className="login container d-flex justify-content-center" >
      <form>
      <div className="my-2 d-flex justify-content-center">
        <h5><strong>Login</strong></h5>
      </div>
        <div className="mb-3 my-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
           
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            
            
          />
        </div>
        <div className="container d-flex justify-content-center">
        <button type="submit" className="btn btn-dark">
          Login
        </button>
        </div>
      </form>
    </div>
  )
}

export default Login