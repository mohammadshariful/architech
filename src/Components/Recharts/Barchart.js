import React from "react";
import { Col } from "react-bootstrap";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Barchart = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <Col md={6}>
      <h3>Invesment vs Revenue</h3>
      <BarChart width={300} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="investment" />
        <YAxis dataKey="revenue" />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    </Col>
  );
};

export default Barchart;
