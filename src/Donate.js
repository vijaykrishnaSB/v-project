import React from "react";
import { useFormik } from "formik";
import "./Donate.css";
import { donateSchema } from "./Donateschema";
import StripeCheckout from "react-stripe-checkout";

const DonateForm = () => {
  const onToken = (token) => {
    console.log(token);
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      number: "",
      // amount: "",
    },
    validationSchema: donateSchema,
    onSubmit: (values, actions) => {
      if (!values.username) {
        errors.username = "username  is required";
      }
      if (!values.number) {
        errors.number = "username  is required";
      }
      if (!values.amount) {
        errors.amount = "username  is required";
      }
      actions.resetForm();
    },
  });
  return (
    <div className="reg-container1">
      <div className="reg-container">
        {/* <h3>Enter Details</h3> */}
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>UserName</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && touched.username && (
            <p className="error">{errors.username}</p>
          )}
          <label>Mobile number</label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Enter Mobilenumber"
            value={values.number}
            onChange={handleChange}
          />
          {errors.number && touched.number && (
            <p className="error">{errors.number}</p>
          )}
          {/* <label>Amount</label> */}
          <select className="select-amount">
            <option>Select Amount</option>
            <option>500</option>
            <option>1000</option>
            <option>1500</option>
            <option>2000</option>
          </select><br/><br/>
            {/* // type="number"
            // name="amount"
            // id="amount"
            // placeholder="Enter amount"
            // value={values.amount}
            onChange={handleChange}
            /> */}
          {/* {errors.amount && touched.amount && (
            <p className="error">{errors.amount}</p>
          )} <br/> */}
          <StripeCheckout
            token={onToken}
            amount="100000"
            currency="INR"
            stripeKey="pk_test_51LWghCSHpzC9oJoTJCtwtTbOCJ5HPoQdCdVYDg2apb05jRhBIy1vuVK5pvfjumcXX2ARRAhJDNlHbGqHkcVZB6IR00pHoNYTTS"
          />
          {/* <button type="submit" className="reg-button">
            Process to Pay{" "}
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default DonateForm;
