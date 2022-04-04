import React from "react";
import { Card, Col } from "react-bootstrap";
import {
  FaPenSquare,
  FaStar,
  FaStarHalfAlt,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import indicator from "../../Assets/Images/indicator.svg";
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
        <FaStarHalfAlt className="full-star" />
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
          <div className="d-flex justify-content-center align-items-center">
            <img src={indicator} alt="" />
            <h5 className="mt-2 ms-1">{name}</h5>
          </div>
          <q>{description.slice(0, 150) + "..."}</q>
          <small className="fw-bold">read more</small>
          <p className=" d-flex  align-items-center">
            Ratings : {ratingIcon} ({rating}) out of 5
          </p>
          <div className="d-flex align-items-center my-2">
            <small>Is this review helpful?</small>
            <div className="d-flex align-items-center justify-content-between">
              <small className="ms-2">
                <FaThumbsUp className="ms-2" />
                <FaThumbsDown className="ms-2" />
              </small>
              <small className="ms-2">
                <FaPenSquare /> Reply
              </small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
