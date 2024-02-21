import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

interface ICategoryDataItem {
  name: string;
  value: number;
}

interface ICategoryCountProps {
  categoryChartData: ICategoryDataItem[];
}

const ChartColors = [
  "#0088FE",
  "#00C49F",
  "#D53F34",
  "#191F2D",
  "#FF5733",
  "#3F6504",
  "#0055ff",
  "#ff1a75",
];

const CategoryCount: React.FC<ICategoryCountProps> = ({
  categoryChartData,
}) => {
  return (
    <div className="shadow ">
      <PieChart width={400} height={400}>
        <Pie
          data={categoryChartData}
          cx={200}
          cy={200}
          labelLine={false}
          label
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {categoryChartData.map((entry: any, index: number) => (
            <Cell
              key={`cell-${index} ${entry}`}
              fill={ChartColors[index % ChartColors.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CategoryCount;
