import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-media">
        <a href="https://www.facebook.com/" target="_blank">
          <FacebookIcon sx={{ color: "darkblue", fontSize: 35 }} />
        </a>
        <a href="https://www.instagram.com/accounts/login/" target="_blank">
          <InstagramIcon sx={{ color: "red", fontSize: 35 }} />
        </a>
        <a href="https://twitter.com/ " target="_blank">
          <TwitterIcon sx={{ color: "blue", fontSize: 35 }} />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <YouTubeIcon sx={{ color: "red", fontSize: 35 }} />
        </a>
      </div>
      <p>Copyright &copy; 2022 Trust | Designed By VIJAY</p>
    </div>
  );
};

export default Footer;
