import React from "react";
import { Container, Row } from "react-bootstrap";
import Areachart from "../Recharts/Areachart";
import Barchart from "../Recharts/Barchart";
import Linechart from "../Recharts/Linechart";
import Piechart from "../Recharts/Piechart";

const DashBoard = () => {
  return (
    <Container className="my-5">
      <Row>
        <Linechart />
        <Areachart />
        <Piechart />
        <Barchart />
      </Row>
    </Container>
  );
};

export default DashBoard;
