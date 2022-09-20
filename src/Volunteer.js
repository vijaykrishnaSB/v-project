import React from "react";
import { useFormik } from "formik";
import "./Volunteer.css";
import { Volunteerschema } from "./Volunteerschema";

const Volunteerfrom = () => {
  const getuser = (values) => {
    console.log(values);
    fetch("http://localhost:4000/volunteer/posting", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((response) => {
        alert("Added successfully");
      });
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      city: "",
      state: "",
      pincode: "",
    },
    validationSchema: Volunteerschema,
    onSubmit: (values, actions) => {
      getuser(values);
      actions.resetForm();
    },
  });
  const imageUpload = () => {
    console.log("vk")
  }
  return (
    <form onSubmit={handleSubmit} className="allvolunteer">
      <div>
        <div className="volunteerform">
          <div>
            <label> Name:</label>
            <input
              className="input"
              name="name"
              type="text"
              placeholder="Enter Fullname"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && touched.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>

          <div>
            <label>Email ID:</label>
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
          <div>
            <label>Mobile Number:</label>
            <input
              className="input"
              name="number"
              type="number"
              placeholder="number"
              value={values.number}
              onChange={handleChange}
            />
            {errors.number && touched.number && (
              <p className="error">{errors.number}</p>
            )}
          </div>
        </div>
        <div className="volunteerform">
          <div>
            <label>City:</label>
            <input
              className="input"
              name="city"
              type="text"
              placeholder="Enter city"
              value={values.city}
              onChange={handleChange}
            />
            {errors.city && touched.city && (
              <p className="error">{errors.city}</p>
            )}
          </div>
          <div>
            <label> State:</label>
            <input
              className="input"
              name="state"
              type="text"
              placeholder="Enter State"
              value={values.state}
              onChange={handleChange}
            />
            {errors.state && touched.state && (
              <p className="error">{errors.state}</p>
            )}
          </div>
          <div>
            <label> Pincode:</label>
            <input
              className="input"
              name="pincode"
              type="number"
              placeholder="Enter Pincode"
              value={values.pincode}
              onChange={handleChange}
            />
            {errors.pincode && touched.pincode && (
              <p className="error">{errors.pincode}</p>
            )}
          </div>
        </div>
        <div className="btn-volunteer">
          <button className="btn-volunteerform" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Volunteerfrom;
