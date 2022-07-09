import React, { useState } from "react";
import { aboutDropdown } from "./Navitems";
// import { joinusDropdown } from "./Navitems";


import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setdropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "about-submenu clicked" : "about-submenu"}
        onClick={() => setdropdown(!dropdown)}
      >
        {aboutDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setdropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
    
  );  
}

export default Dropdown;
