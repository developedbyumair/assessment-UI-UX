import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@mui/material/styles";

const data = [
  { month: "Jan", Spent: 8000, Excepted: 12000 },
  { month: "Feb", Spent: 9678, Excepted: 13982 },
  { month: "Mar", Spent: 12000, Excepted: 15000 },
  { month: "Apr", Spent: 15000, Excepted: 19000 },
  { month: "May", Spent: 22000, Excepted: 23000 },
  { month: "Jun", Spent: 24000, Excepted: 26000 },
  { month: "Jul", Spent: 27000, Excepted: 30000 },
];

export const CustomBarChart: React.FC = () => {
  const theme = useTheme();
  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => Math.max(i.Spent, i.Excepted)));
    return dataMax / 3;
  };

  const off = gradientOffset();

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{
          top: 10,
          left: 20,
        }}
      >
        <XAxis
          dataKey="month"
          tickLine={false}
          tick={{ fill: theme.palette.text.primary }}
        />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />
        <Legend />
        <defs>
          <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.6} />
          </linearGradient>
          <linearGradient id="colorExcepted" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.9} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.6} />
          </linearGradient>
        </defs>
        <Bar
          dataKey="Spent"
          fillOpacity={1}
          fill="url(#colorSpent)"
          radius={[5, 5, 0, 0]}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Bar>
        <Bar
          dataKey="Excepted"
          fillOpacity={1}
          fill="url(#colorExcepted)"
          radius={[5, 5, 0, 0]}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
