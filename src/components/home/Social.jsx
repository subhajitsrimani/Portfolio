import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/subhajit-srimani-310054222/" className="home__social-icon" target="_blank">
      <i class='bx bxl-linkedin' ></i>
      </a>

      <a href="https://twitter.com/SrimaniSubhajit" className="home__social-icon" target="_blank">
        <i class="uil uil-twitter"></i>
      </a>

      <a href="https://github.com/subhajitsrimani" className="home__social-icon" target="_blank">
        <i class="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
