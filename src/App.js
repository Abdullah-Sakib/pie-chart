import "./App.css";
import { PieChart, Pie, Cell } from "recharts";

const data01 = [
  {
    name: "Group A",
    value: 5,
  },
  {
    name: "Group B",
    value: 45,
  },
  {
    name: "Group C",
    value: 25,
  },
  {
    name: "Group D",
    value: 15,
  },
  {
    name: "Group E",
    value: 10,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 25,
  },
  {
    name: "Group B",
    value: 25,
  },
  {
    name: "Group C",
    value: 16,
  },
  {
    name: "Group D",
    value: 25,
  },
  {
    name: "Group E",
    value: 14,
  },
 
];
const COLORS = ["#1e5691", "#0697e6", "#fbb402", "#98c417", "#fe76b4"];
const COLORS2 = [  "#fbb402",  "#fe76b4", "#0697e6",  "#1e5691", "#98c417",];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <PieChart width={930} height={900}>
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS.length]} />
          ))}
          </Pie>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={160}
          fill="#82ca9d"
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Pie
          data={data01}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          innerRadius={200}
          outerRadius={400}
          fill="#8884d8"
          dataKey="value"
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default App;
