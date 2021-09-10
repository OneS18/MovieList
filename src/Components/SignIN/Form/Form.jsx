import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object.shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(20).required(),
});

const Form = () => {
  return (
    <div className="bg-text">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form>
          <input type="text" name="name" placeholder="Name..." />
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

export default Form;
