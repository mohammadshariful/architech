import React from "react";
import { Container, Row } from "react-bootstrap";
import Areachart from "../Recharts/Areachart";
import Barchart from "../Recharts/Barchart";
import LineChar from "../Recharts/LineChart";
import Piechart from "../Recharts/Piechart";

const DashBoard = () => {
  return (
    <Container className="my-5">
      <Row>
        <LineChar />
        <Areachart />
        <Piechart />
        <Barchart />
      </Row>
    </Container>
  );
};

export default DashBoard;
