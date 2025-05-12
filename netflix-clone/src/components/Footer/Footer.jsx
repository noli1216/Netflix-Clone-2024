import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        <div className="footer-data">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relation</li>
            <li>Legal Notice</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Gift Card</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="service-code">
          <p>Service Code</p>
        </div>

        <div className="copy-write">
          <CopyrightOutlinedIcon />
          <span>1997–2024 Netflix, Inc.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
