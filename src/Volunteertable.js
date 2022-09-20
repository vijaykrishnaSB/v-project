import React, { useState, useEffect } from "react";
import Volunteerform from "./Volunteer";
import "./Volunteer.css";

const Volunteercase = () => {
  const [tabdata, setTabdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/volunteer/posting",{
      method: "GET",
      body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => setTabdata(json));
  }, []);

  const tableRows = tabdata.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.email}</td>
        <td>{info.number}</td>
        <td>{info.city}</td>
        <td>{info.state}</td>
        <td>{info.pincode}</td>
      </tr>
    );
  });

  return (
    <div>
      <Volunteerform />
      <table id="table-data">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>number</th>
          <th>City</th>
          <th>State</th>
          <th>Pincode</th>
        </tr>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};
export default Volunteercase;
