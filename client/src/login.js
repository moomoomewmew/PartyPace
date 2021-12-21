import React from "react";
import CreateAccount from "./components/CreateAccount.jsx";
import Login from "./components/Login.jsx";


const LoginPage = (props) => {

    const isLoggedIn = props.isLoggedIn
    const toggleLogin = props.toggleLogin

        return (
            <div>
                <Login />
            </div>
        )
}

export default LoginPage;
