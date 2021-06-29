import React, { useState } from 'react'
import '../css/login.css';



function Login() {
    const[user,setUser]=useState({
        email:'',
        password:'',
    })
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
    }
    return (
        <div className="login">
            <h3>Login Form</h3>
            <div className="form">
            <form onSubmit={handleSubmit}>
            <input type="text" name="email"  placeholder="Email/Phone Number" onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password/Pin" onChange={handleChange}/>
            <button>Sign In</button>
            </form>
            </div>
        </div>
    )
}

export default Login
