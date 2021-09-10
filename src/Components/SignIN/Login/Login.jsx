import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="bg-login">
      <div className="title">Login</div>
      <div className="inputs">
        <form>
          <input type="text" name="email" placeholder="Email..." />
          <input type="text" name="password" placeholder="Password..." />
          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
