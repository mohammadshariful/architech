import React from "react";
import { Container } from "react-bootstrap";
import aboutImg from "../../Assets/Images/aboutImg.jpg";
import "./About.css";
const About = () => {
  return (
    <Container className="py-5">
      <h3 className="text-center text-success mb-4">ArchiTech Ltd</h3>
      <img src={aboutImg} className="img-fluid about-img" alt="about-img" />
      <div>
        <h4 className="text-primary">About ArchiTech</h4>
        <p>
          ArchiTech has been founded on 1 March 2020. From then to now,
          ArchiTech has won the heart of many people and now is a country-wide
          renowned brand. That has been possible due to the hard workArchiTech
          has done to satisfy its customers. Having the aim to satisfy
          customers, providing customers with their required products, and being
          true to their motto, “Customers Come First,” has broughtArchiTech to
          the top of the E-Commerce Site and also is one of the largest Computer
          and Technology product retailers
        </p>
      </div>
      <div>
        <h4 className="text-primary">The Main Goal and Aim</h4>
        <p>
          We are ArchiTech, and we are here to help you with all your technology
          needs. We aim to provide all the requirements of our customers and
          help them satisfy their needs, wants, and desires. We delight in
          seeing our customers happy and satisfied with our resiliency in
          providing them with their products. Our complete focus is on the
          customers.
        </p>
      </div>
      <div>
        <h4 className="text-primary">Customer Satisfaction</h4>
        <p>
          We have been in the market for a long time, and we have come to know
          what the customers want and desire. We have made changes around our
          customers so that we will be able to fulfill the desires of each of
          our customers. We want to improve more and more to be able to give
          everyone their desired or dreamed products.
        </p>
      </div>
      <div>
        <h4 className="text-primary">The Brand That Cares For You</h4>
        <p>
          This is ArchiTech! A Brand that is Truly concerned about its customers
          and loyally provides all the needs of the customers. Customers come
          first to this Company. Our customers will receive the best service and
          deals that ArchiTech offers. To us, our customers wants and needs take
          the top priority.
        </p>
      </div>
    </Container>
  );
};

export default About;
