import React, { useState, useEffect } from "react";
import "./Reportcase.css";
import Reportcaseform from "./Reportform";

import IconButton from "@mui/material/IconButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Reportdetails = () => {
  const [tabdata, setTabdata] = useState();
  const params = useParams();

  const navigate = useNavigate();
//   let fetchdata = async () => {
//     try {

//         let getdata = (await axios.get(`http://localhost:4000/reports/report/${params.id}`)).data;
//         setTabdata(getdata);
//         console.log(getdata);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// useEffect(() => {

//     fetchdata()
// }, []);
  console.log(params.id);
  const fetchdata = (data) =>{
    fetch(`http://localhost:4000/reports/report/${params.id}`, {
      method: "GET",
      body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((json) => setTabdata(json));
  }
  useEffect(() => {
    fetchdata();
  }, []);

  const tableRows = tabdata.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
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
  const addRows = (data)=> {
    const totalReportlist = tabdata.length;
    data.id = totalReportlist + 1;
    const updatedReportlistData = [...tabdata];
    updatedReportlistData.push(data);
    setTabdata(updatedReportlistData);
  }
  return (
    <div>
      <Reportcaseform func={addRows}/>
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
