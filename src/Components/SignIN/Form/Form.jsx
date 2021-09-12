import React, { useState, useEffect } from "react";
import "./Form.scss";
import fire from "../../../firebase/firebase";
import SignIn from "./Signin";
import LoginUser from "../Login/Login";
import Status from "./Status/Status";

const Form = () => {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setAge("");
    setName("");
  };

  const clearErrors = () => {
    setEmailError("");
    setNameError("");
    setPasswordError("");
    setAgeError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  return (
    <div className="bg">
      <LoginUser
        emailError={emailError}
        passwordError={passwordError}
        ageError={ageError}
        nameError={nameError}
        setHasAccount={setHasAccount}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        handleLogout={handleLogout}
        hasAccount={hasAccount}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        age={age}
        setAge={setAge}
        name={name}
        setName={setName}
      />
      <Status handleLogout={handleLogout} />
    </div>
  );
};

export default Form;
