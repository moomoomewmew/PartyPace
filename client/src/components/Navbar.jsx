import React from "react";
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {

    return (
        <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/newaccount">Create Account</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
        </nav>
    )

}

export default Navbar