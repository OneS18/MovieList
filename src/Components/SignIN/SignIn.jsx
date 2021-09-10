import React from "react";
import Form from "./Form/Form";
import "./singin.scss";
import Login from "./Login/Login";

const SignIn = () => {
  return (
    <div className="signin-background">
      <Form />
      <Login />
    </div>
  );
};

export default SignIn;
