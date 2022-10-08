import React, { useState, useEffect } from "react";
import Volunteerform from "./Volunteer";
import "./Volunteer.css";
import IconButton from "@mui/material/IconButton";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

const Volunteercase = () => {
  const [tabdata, setTabdata] = useState([]);
  const navigate = useNavigate();
  // const params = useParams();
  useEffect(() => {
    fetch("http://localhost:4000/volunteer",{
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
        <td>
          <IconButton onClick={() => navigate(`/edit/${info.id}`)}>
            <EditIcon style={{ color: "black" }} />
          </IconButton>
        </td>
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
          <th></th>
        </tr>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};
export default Volunteercase;
