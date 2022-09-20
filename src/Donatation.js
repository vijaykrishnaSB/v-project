import React from "react";
import "./Donate.css";
import image11 from "./assets/image11.jpg";
import image12 from "./assets/image12.jpg";
import image13 from "./assets/image13.jpg";
import image14 from "./assets/image14.jpg";
import image15 from "./assets/image15.jpg";
import image16 from "./assets/image16.jpg";
import image17 from "./assets/image17.jpg";
import image18 from "./assets/image18.jpg";
import image19 from "./assets/image19.jpg";
import { useNavigate } from "react-router-dom";
// import StripeCheckout from "react-stripe-checkout";

//   const onToken = (token) => {
//     console.log(token);
//   };
const Ourdonate = ({ id }) => {
  const navigate = useNavigate();

  return (
    <div className="member-list">
      <div className="managment-container">
        <img src={image19} className="image" />
        <h4>Sundar Pichai</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        {/* <StripeCheckout
            token={onToken}
            stripeKey="pk_test_51LWghCSHpzC9oJoTJCtwtTbOCJ5HPoQdCdVYDg2apb05jRhBIy1vuVK5pvfjumcXX2ARRAhJDNlHbGqHkcVZB6IR00pHoNYTTS"
          /> */}
        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Click Here
        </button>
      </div>
      <div className="managment-container">
        <img src={image13} className="image" />
        <h4>Tendulkar</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate Here
        </button>
      </div>
      <div className="managment-container">
        <img src={image18} className="image" />
        <h4>Federer</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate Here
        </button>
      </div>
      <div className="managment-container">
        <img src={image15} className="image" />
        <h4>Yuraj Singh</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate Here
        </button>
      </div>
      <div className="managment-container">
        <img src={image16} className="image" />
        <h4>Rahul Dravid</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate Here
        </button>
      </div>
      <div className="managment-container">
        <img src={image11} className="image" />
        <h4>MJ</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <button
          className="donatebutton"
          onClick={() => navigate(`/Donates/${id}`)}
        >
          Donate Here
        </button>
      </div>
    </div>
  );
};
export default Ourdonate;
