import React from "react";
import { Row } from "react-bootstrap";
import useUser from "../../CustomHooks/useUser";
import User from "../User/User";
import "./Reviews.css";
const Reviews = () => {
  const [users] = useUser();
  return (
    <section className="reviews-container">
      <h2 className="text-center">What Our Customer Say !!!</h2>
      <Row className="users justify-content-center">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </Row>
    </section>
  );
};

export default Reviews;
