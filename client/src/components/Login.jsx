import React, { useState } from 'react'
import '../styles/Validator.css'

const Login = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [valid, setValid] = useState(null)
  const [alert, setAlert] = useState("")

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
    setValid(null)
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
      setAlert("Youve sucessfully logged in")
    } else {
      console.log('we did it')
    }
  }

  return (
    <div className="form">
      <h1>Sign Up</h1>
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

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange={savePasswordConfirm}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit" onClick={formSubmission}>Sign Up</button>
        <p>{alert}</p>
      </form>
    </div>
  )
}

export default Login
