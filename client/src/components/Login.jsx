import React, { useState } from 'react'
import '../styles/Validator.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {
    
    const navigate = useNavigate()

    const isLoggedIn = props.isLoggedIn
    const toggleLogin = props.toggleLogin
    console.log(props)

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const saveUserName = (e) => {
        setUserName(e.target.value)
    }

    const savePassword = (e) => {
        setPassword(e.target.value)
    }

    const formSubmission = (e) => {
        console.log(userName)
        console.log(password)
        e.preventDefault()

        if (userName === "") {
            alert('Please enter a user name')
        } else if (password === "") {
            alert('Please enter a password')
        } else {
            toggleLogin(true)
            alert("Youve sucessfully logged in")
            navigate('/dashboard')
        }
    }

    return (
        <div className="form">
            <h1>Login</h1>
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={saveUserName}
                />
                <label htmlFor="username">Username</label>

                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={savePassword}

                />
                <label htmlFor="password">Password</label>

                <button type="submit" onClick={formSubmission}>Login</button>
                <Link to="/newaccount">Create Account</Link>
            </form>
        </div>
    )
}

export default Login
