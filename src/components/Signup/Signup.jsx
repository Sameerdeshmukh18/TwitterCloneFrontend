import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Signup.css"

function Signup() {

    const [credentials, setcredentials] = useState({ name:"", email: "", password: "", cpassword:"" });
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(credentials);

    }
    
    return (
        <div className="signup container d-flex justify-content-center">

            <form onSubmit={handleSubmit}>
                <div className="my-2 d-flex justify-content-center">
                    <h5><strong>Signup</strong></h5>
                </div>
                <div className="mb-3 my-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        name="name"
                        onChange={onChange}
                        
                    />

                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        name="email"
                        onChange={onChange}
                        
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={onChange}
                        name="password"
                        required
                        minLength={5}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="cpassword"
                        onChange={onChange}
                        name="cpassword"
                        required
                        minLength={5}
                    />
                </div>
                <div className="container d-flex justify-content-center">
                    <button type="submit" className="btn btn-dark">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Signup