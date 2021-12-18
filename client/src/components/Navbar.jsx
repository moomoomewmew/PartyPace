import React from "react";
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {

    return (
        <nav classname="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/newaccount">Create Account</Link>
            <Link to="/dashboard">Dashboard</Link>
        </nav>
    )

}

export default Navbar