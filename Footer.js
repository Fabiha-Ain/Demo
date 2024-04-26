// Footer.js
import React from "react";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./Footer.css";

const Footer = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="footer">
      <h3>Fariha Chowdhury Zain</h3>
      <h4>Chittagong, Bangladesh</h4>
      <h5>jainfariha@gmail.com</h5>
      <div className="social-icons">
        <IconButton
          onClick={() =>
            openLink("https://www.facebook.com/profile.php?id=100078133748379")
          }
        >
          <FacebookIcon className="icon" />
        </IconButton>
        <IconButton
          onClick={() => openLink("https://www.instagram.com/jainfariha/")}
        >
          <InstagramIcon className="icon" />
        </IconButton>
        <IconButton
          onClick={() =>
            openLink(
              "https://www.linkedin.com/in/fariha-chowdhury-jain-206660148/"
            )
          }
        >
          <LinkedInIcon className="icon" />
        </IconButton>
        <IconButton onClick={() => openLink("https://twitter.com/ZainFariha1")}>
          <TwitterIcon className="icon" />
        </IconButton>
      </div>
      <div>
        <hr />
        <p>© jainfariha, All Rights Reserved | Developed By Ain</p>
      </div>
    </div>
  );
};

export default Footer;
