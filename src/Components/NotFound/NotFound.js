import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="not-found-container">
      <div className="not-found">
        <h1>404</h1>
        <h2>OPPS!PAGE NOT FOUND</h2>
        <p>
          Sorry,the page you're looking for doesn't exist.If you think,something
          is broken report a problem
        </p>
        <div className="not-found-btn-container d-flex justify-content-evenly align-items-center mt-3 flex-column flex-md-row">
          <button type="button" onClick={() => navigate("/home")}>
            retun home
          </button>
          <button type="button">report problem</button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
