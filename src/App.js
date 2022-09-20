import React from "react";
import { Routes, Route } from "react-router-dom";
// import Donate from "./Donate";
// import Login from "./Login";
// import Register from "./Register";
import Reportform from "./Reportform";
import Reportcase from "./Reportcase";
import Reportdetails from "./Reportdetails";
import Volunteer from "./Volunteer";
import Volunteertable from "./Volunteertable";
// import Donatation from "./Donatation";
function App() {
  return (
    <div className="container">
      <Routes>
        {/* <Login /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/donatation" element={<Donatation />} /> */}
        {/* <Route path="/Donates/:id" element={<Donatation />} /> */}
        {/* <Route path="/Donates/:id" element={<Donate />} /> */}
        {/* <Route path="/Report/:id" element={<Reportdetails />} /> */}
        {/* <Route path="/Reportcase" element={<Reportcase />} /> */}
        <Route path="/Volunteertable" element={<Volunteertable />} />

      </Routes>
      {/* <Donatation /> */}
      {/* <Donate /> */}
      {/* <Reportform /> */}
      {/* <Reportcase /> */}
      {/* <Volunteer /> */}
      {/* <Volunteercase />/ */}
      {/* https://vijay-trustproject.herokuapp.com/reports */}
    </div>
  );
}
export default App;
