import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
const data = [
  {
    name: "12 am",
    uv: 400,
    pv: 240,
    amt: 2400
  },
  {
    name: "2 am",
    uv: 300,
    pv: 139,
    amt: 2210
  },
  {
    name: "4 am",
    uv: 200,
    pv: 980,
    amt: 2290
  },
  {
    name: "6 am",
    uv: 278,
    pv: 390,
    amt: 2000
  },
  {
    name: "8 am",
    uv: 189,
    pv: 480,
    amt: 2181
  },
  {
    name: "10 am",
    uv: 239,
    pv: 380,
    amt: 25000
  },
  {
    name: "12 pm",
    uv: 349,
    pv: 430,
    amt: 2100
  }
];
// const CustomTooltip = ({ active, payload, label }) => {
//     if (active) {
//       return (
//         <div className="custom-tooltip">
//           <p className="label">{`${label} : ${payload[0].value}`}</p>
//           <p className="intro">{getIntroOfPage(label)}</p>
//           <p className="desc">Anything you want can be displayed here.</p>
//         </div>
//       );
//     }

//     return null;
// };
const ChartSection = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        //   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartSection;
