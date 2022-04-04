import React from "react";
import { Container } from "react-bootstrap";
import authorImg from "../../Assets/Images/author-img.jpg";
import blockInlineImg from "../../Assets/Images/block-inline.webp";
import contextApi from "../../Assets/Images/context-api.jpg";
import semanticTagImg from "../../Assets/Images/semantic-tag.jpg";
import "./Blogs.css";
const Blogs = () => {
  return (
    <Container className=" my-5 p-3">
      <article className="blog">
        <h4 className="fw-bolder mb-3">Title : Context Api</h4>
        <div className="px-3">
          <img className="blog-img img-fluid" src={contextApi} alt="" />
          <p className="text-center my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, sit
            exercitationem voluptates provident similique repudiandae unde
            tenetur. Quasi illo, libero ratione quo excepturi doloremque, vel
            fugiat aperiam ex obcaecati ipsa.
          </p>
        </div>
        <div className="d-flex align-items-center px-3">
          <img className="author-img" src={authorImg} alt="" />
          <h6 className="ms-2">Mohammad Shariful</h6>
        </div>
        <p className="text-muted px-3">Mar 30. 5 min red</p>
      </article>
      <article className="blog">
        <h4 className="fw-bolder mb-3">Title :Semantic Tag</h4>
        <div className="px-3">
          <img className="blog-img img-fluid" src={semanticTagImg} alt="" />
          <p className="text-center my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, sit
            exercitationem voluptates provident similique repudiandae unde
            tenetur. Quasi illo, libero ratione quo excepturi doloremque, vel
            fugiat aperiam ex obcaecati ipsa.
          </p>
        </div>
        <div className="d-flex align-items-center px-3">
          <img className="author-img" src={authorImg} alt="" />
          <h6 className="ms-2">Mohammad Shariful</h6>
        </div>
        <p className="text-muted px-3">Apr 2. 8 min red</p>
      </article>
      <article className="blog">
        <h4 className="fw-bolder mb-3">Title : Block,Inline,Inline-Block</h4>
        <div className="px-3">
          <img className="blog-img img-fluid" src={blockInlineImg} alt="" />
          <p className="text-center my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, sit
            exercitationem voluptates provident similique repudiandae unde
            tenetur. Quasi illo, libero ratione quo excepturi doloremque, vel
            fugiat aperiam ex obcaecati ipsa.
          </p>
        </div>
        <div className="d-flex align-items-center px-3">
          <img className="author-img" src={authorImg} alt="" />
          <h6 className="ms-2">Mohammad Shariful</h6>
        </div>
        <p className="text-muted px-3">June 20. 10 min red</p>
      </article>
    </Container>
  );
};

export default Blogs;
