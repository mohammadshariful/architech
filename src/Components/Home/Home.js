import React from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import headerBg from "../../Assets/Images/sunset-5344024_1280.jpg";
import useUser from "../../CustomHooks/useUser";
import User from "../User/User";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const [users] = useUser();
  const sliceUsers = users.slice(0, 3);
  return (
    <Container className="home-container">
      <section className="d-flex justify-content-between align-items-center flex-column-reverse flex-md-row">
        <div className="bannar-info">
          <h1>Capture Your Beautiful Moments</h1>
          <p>
            A DSLR camera will give you better resolution, sharpness and clarity
            because it uses a larger sensor to capture the image and more
            powerful processing power. Using a DSLR also gives you the
            versatility of interchangeable lenses.
          </p>
          <button type="button" className="demo-btn">
            Live Demo
          </button>
        </div>
        <div className="d-flex justify-content-center justify-content-md-end">
          <img src={headerBg} className="header-bg img-fluid" alt="bannar-bg" />
        </div>
      </section>
      <section className="my-5">
        <h2 className="text-center">Customer Reviews({sliceUsers.length})</h2>
        <Row className="users justify-content-center">
          {sliceUsers.map((user) => (
            <User key={user._id} user={user} />
          ))}
        </Row>
        <button
          type="button"
          className="showAll-btn"
          onClick={() => navigate("/reviews")}
        >
          Show All Reviews
        </button>
      </section>
    </Container>
  );
};

export default Home;
