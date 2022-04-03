import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./User.css";
const User = ({ user }) => {
  const { description, name, picture, rating } = user;

  let ratingIcon;
  if (rating === 5) {
    ratingIcon = (
      <small>
        <FaStar className="full-star" />
        <FaStar className="full-star" />
        <FaStar className="full-star" />
        <FaStar className="full-star" />
        <FaStar className="full-star" />
      </small>
    );
  } else if (rating === 4.5) {
    ratingIcon = (
      <small>
        <FaStar className="full-star" />
        <FaStar className="full-star" />
        <FaStar className="full-star" />
        <FaStar className="full-star" />
        <FaStarHalfAlt className="half-star" />
      </small>
    );
  } else {
    ratingIcon = (
      <small>
        <FaStar className="full-star" />
        <FaStar className="full-star" />
        <FaStar className="full-star" />
        <FaStar className="full-star" />
      </small>
    );
  }

  return (
    <Col md={4} className="my-3 user-cart">
      <Card className="h-100">
        <Card.Body className="body-container">
          <Card.Img src={picture} className="card-img d-block mx-auto" />
          <h5 className="text-center">{name}</h5>
          <p>{description}</p>
          <p className=" d-flex  align-items-center">
            Ratings : {ratingIcon} out of 5
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
