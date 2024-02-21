import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CustomTooltip: React.FC<{
  active?: boolean;
  payload?: any;
  label?: any;
}> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          width: "600px",
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <p>{`Title: ${label}`}</p>
        <p>{`Count: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const ProductNameCount = ({ totalTitleChart }: any) => {
  return (
    <div >
      <BarChart width={800} height={350} data={totalTitleChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar  dataKey="CountByProductTitle" fill="#191F2D" />
      </BarChart>
    </div>
  );
};

export default ProductNameCount;
