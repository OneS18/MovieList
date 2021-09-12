import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Form from "../../SignIN/Form/Form";

const Login = (props) => {
  return (
    <div className="login-button">
      <Link to="/signin">
        {props.hasAccount ? <h1>Hello</h1> : <button>Login</button>}
        <Form />
      </Link>
    </div>
  );
};

export default Login;
