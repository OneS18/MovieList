import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-button">
      <Link to="/signin">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Login;
