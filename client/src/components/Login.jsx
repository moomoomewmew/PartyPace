import React, { useState } from 'react'
import '../styles/Validator.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {
    
    const navigate = useNavigate()

    const isLoggedIn = props.isLoggedIn
    const toggleLogin = props.toggleLogin


    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [alert, setAlert] = useState("")

    const handleLoginClick = () => toggleLogin(true)

    const saveUserName = (e) => {
        setUserName(e.target.value)
    }

    const savePassword = (e) => {
        setPassword(e.target.value)
    }

    const savePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)
    }

    const formSubmission = (e) => {
        console.log(userName)
        console.log(password)
        console.log(passwordConfirm)
        e.preventDefault()

        if (userName === "") {
            setAlert('Please enter a user name')
        } else if (password.length < 7) {
            setAlert("Your password must be at least 7 characters long")
            console.log(password.length)
        } else if (password !== passwordConfirm) {
            setAlert("Your passwords do not match")
        } else if (userName && password === passwordConfirm && password.length > 7) {
            navigate('/dashboard')
            handleLoginClick()
            setAlert("Youve sucessfully logged in")
        } else {
            console.log('we did it')
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

                <button type="submit" onClick={formSubmission, handleLoginClick}>Login</button>
                <p>{alert}</p>
                <Link to="/newaccount">Create Account</Link>
            </form>
        </div>
    )
}

export default Login
