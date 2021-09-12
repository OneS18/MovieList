import React from "react";

const SignIn = (props) => {
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
    hasAccount,
  } = props;
  return (
    <div>
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form>
          <input
            type="text"
            autoFocus="true"
            required
            name="name"
            placeholder="Name..."
            onChange={(e) => setName(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <input type="text" name="email" placeholder="Email..." />
          <input type="text" name="age" placeholder="Age..." />
          <input type="text" name="password" placeholder="Password..." />
          <input type="submit" className="submit" />
          <br />

          <button type="submit" className="submit-google">
            <span>or with</span> Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
