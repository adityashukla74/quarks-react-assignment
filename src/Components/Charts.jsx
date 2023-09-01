import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, ResponsiveContainer
} from "recharts";

const data = [
  {
    id: "0",
    name: "Naruto",
    location: "konoha",
    health: "Healthy",
    ip: "abcd",
    volume: 1000000000 // in bytes
  },
  {
    id: "1",
    name: "Sasuke",
    location: "Orochimaru Hidden Village",
    health: "error",
    ip: "abcd",
    volume: 300000000 // in bytes
  }
];

const ChartComponent = () => {
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          left: 70,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="volume" />
        <Tooltip />
        <Legend />
        <Bar dataKey="volume" fill="#8884d8" />
      </BarChart>
    </div>

  );
};

export default ChartComponent;
