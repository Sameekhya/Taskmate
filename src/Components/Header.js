import Logo from "../assets/logo.svg";
import React from "react";
import '../index.css';

const Header = () => {
  
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="taskmate logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span className="light "></span>
        <span className="medium "></span> 
        <span className="dark "></span> 
        <span className="gradientOne "></span> 
        <span className="gradientTwo "></span>
        <span className="gradientThree "></span>

      </div>
    </header>
  );
};

export default Header;
