import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import {auth} from './Firebase'
import { useStateValue } from './StateProvider';
function Login (){

    const history= useHistory(); 
    const [useremail, setUserEmail] = useState('')
    const [userpassword, setUserPassword] = useState('')

    const loginuser = event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail,userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const Signupuser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail,userpassword)
        .then(auth =>{
            history.push('/')
        })
        .catch(e => alert(e.message))
    }
    return(
        <div className="login">
            <Link>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)}  type="password" />
                    <button onClick={loginuser} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By singing in you agree to Amazon's terms and conditions.</p>
                <button onClick={Signupuser} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login