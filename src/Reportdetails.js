import React, { useState, useEffect } from "react";
import "./Reportcase.css";

const Reportdetails = () => {
  const [tabdata, setTabdata] = useState([]);
  const [total, setTotal] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/reports", {
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
        <td>{info.emailid}</td>
        <td>{info.mobilenumber}</td>
        <td>{info.date}</td>
        <td>{info.address}</td>
        <td>{info.district}</td>
        <td>{info.state}</td>
        <td>{info.pincode}</td>
        <td>{info.reasonofreporting}</td>
      </tr>
    );
  });

  return (
    <div>
      <table id="table-data">
        <tr>
          <th>Name</th>
          <th>Emailid</th>
          <th>Mobile number</th>
          <th>Date of Reporting</th>
          <th>Address</th>
          <th>District</th>
          <th>State</th>
          <th>Pincode</th>
          <th>Reason of reporting</th>
        </tr>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};
export default Reportdetails;
