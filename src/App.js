import React from "react";
import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import{Home} from "./components/Home";
// import About from "./components/About";
// import Ourimpact from "./components/Ourimpact";
// import Joinus from "./components/Joinus";
// import Contactus from ".components/Contactus/";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>              
              {/* <Route path="/" components = {Home} exact={<Home />} />
              <Route path="/about" components = {About} exact={<About />} />
              <Route path="/ourimpact" components = {Ourimpact} exact={<Ourimpact />} />
              <Route path="/joinus" components = {Joinus} exact={<Joinus />} />
              <Route path="/contactus" components = {Contactus} exact={<Contactus />} /> */}
          </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
