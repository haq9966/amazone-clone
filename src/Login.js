import React from 'react'
import './Login.css'

function Login (){
    
    return(
        <div className="login">
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button type="submit" className="login__signInbutton">Sign In</button>
                </form>
                <p>By singing in you agree to Amazon's terms and conditions.</p>
            </div>
        </div>
    )
}

export default Login