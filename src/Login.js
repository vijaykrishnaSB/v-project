import React, { useState } from "react";
import { useFormik } from "formik";
import "./Login.css";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const formValidationSchema = yup.object({
  email: yup.string().required("Required Email"),
  password: yup.string().required("Required Password"),
});

function LoginForm() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);
  const handleToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(FaEye);
    } else {
      setPasswordType("password");
      setPasswordIcon(FaEyeSlash);
    }
  };
  const getuser = (values) => {
    console.log(values);
    fetch("http://localhost:4000/users/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((response) => {
        alert(response.message);
      });
  };
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values, actions) => {
        console.log("onSubmit", values);
        // if (values.password === values.password) {
        //   alert("Successfully login");
        // }
        getuser(values);
        actions.resetForm();
      },
    });
  return (
    <div className="login-container1">
      <div className="Login-container">
        <h2> Sign In </h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <div className="err-msg">{errors.email}</div>
          ) : null}

          <label>Password</label>
          <input
            type={passwordType}
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="login-icon" onClick={handleToggle}>
            {passwordIcon}
          </span>
          {touched.password && errors.password ? (
            <div className="err-msg">{errors.password}</div>
          ) : null}

          {/* <Link to="/"> */}
          <button className="log-button">Login</button>
          {/* </Link> */}
          <p>
            {" "}
            No account ?{" "}
            <Link to="/register">
              {" "}
              <span style={{ color: "blue" }}>Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
