import React from "react";
import "./NotFound.css";
const NotFound = () => {
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
          <button>retun home</button>
          <button>report problem</button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
