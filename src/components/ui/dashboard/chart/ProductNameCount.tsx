import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useCureentThemeMode } from "../../../../redux/features/theme/themeSlice";
import { useAppSelector } from "../../../../redux/hooks";

const CustomTooltip: React.FC<{
  active?: boolean;
  payload?: any;
  label?: any;
}> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          width: "80%",
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
  const mode = useAppSelector(useCureentThemeMode);

  return (
    <div style={{ width: '100%', height: 350 }}>
      <ResponsiveContainer>
        <BarChart  data={totalTitleChart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="CountByProductTitle"
            fill={`${mode ? "#D53F34" : "#191F2D"}`}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductNameCount;
