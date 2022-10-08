import React, { useState, useEffect } from "react";
import Reportcaseform from "./Reportform";
import "./Reportcase.css";
import { useNavigate, useParams } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import IconButton from "@mui/material/IconButton";

const Reportcase = () => {
  const navigate = useNavigate();
  const [tabdata, setTabdata] = useState([]);
  const { id } = useParams();
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
        <td>{info.reasonofreporting}</td>
        <td>
          <IconButton onClick={() => navigate(`/Reports/${info.id}`)}>
            <RemoveRedEyeIcon style={{ color: "black" }} />
          </IconButton>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Reportcaseform />
      <table id="table-data">
        <tr>
          <th>Name</th>
          <th>Emailid</th>
          <th>Reason of reporting</th>
          <th></th>
        </tr>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};
export default Reportcase;
