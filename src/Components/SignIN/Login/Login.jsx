import React from "react";
import "./Login.scss";

const LoginUser = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    age,
    setAge,
    emailError,
    passwordError,
    ageError,
    nameError,
    setHasAccount,
    handleLogin,
    handleSignUp,
    handleLogout,
    hasAccount,
  } = props;
  return (
    <div className="bgg-login">
      <div className="title">
        {hasAccount ? (
          <h1 className="title">SignIn</h1>
        ) : (
          <h1 className="title">Login</h1>
        )}
      </div>
      <div className="inputs">
        <form>
          <p className="errorMsg">{nameError}</p>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>

          <input
            type="text"
            name="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button onClick={handleLogin} className="inputdata">
                  <span>Sign in</span>
                </button>
                <p className="notaccount">
                  Don't have a account ?{" "}
                  <span
                    className="signinandsignup"
                    onClick={() => {
                      setHasAccount(!hasAccount);
                    }}
                  >
                    Sign In
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className="inputdata" onClick={handleSignUp}>
                  <span>Sign up</span>
                </button>
                <p className="account">
                  Have a account ?{" "}
                  <span
                    className="signinandsignup"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign in
                  </span>
                </p>
                <p></p>
              </>
            )}
          </div>
        </form>
        <div className="welcome">{}</div>
      </div>
    </div>
  );
};

export default LoginUser;

// handleLogout;
