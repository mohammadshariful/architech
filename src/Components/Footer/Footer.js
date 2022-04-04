import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { key } = useLocation();
  return (
    <footer className={key.includes("default") ? "d-none" : "null"}>
      <div className="text-center mt-5 bg-dark text-white py-5">
        <h5>
          &copy; copyright <span className="brand">A</span>rchiTech
        </h5>
        <h6> All rights reserved 2020-2022</h6>
        <p>Development by &hearts; Mohammad Shariful</p>
      </div>
    </footer>
  );
};

export default Footer;
