import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CircularWithValueLabel from './Spinner';

const ChartComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    fetch("https://api.npoint.io/8d0109c35278f342992a")
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? ( // Render the spinner while loading is true
        <CircularWithValueLabel />
      ) : (
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
      )}
    </div>
  );
};

export default ChartComponent;