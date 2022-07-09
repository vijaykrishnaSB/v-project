import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { GiAbstract061 } from "react-icons/gi";
import * as Icons from "react-icons/gi";
import "./Navbar.css";
import { navItems } from "./Navitems";
import Signup from "./Signup";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(true);
  
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          TRUST
          <Icons.GiAbstract061 />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "ABOUT") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        {/* <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/ourimpact'><li>Ourimpact</li></Link>
        <Link to='/joinus'><li>Joinus</li></Link>
        <Link to='/contactus'><li>Contactus</li></Link> */}
        <Signup />
      </nav>
    </>
  );
}

export default Navbar;
