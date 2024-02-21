import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

interface IDonationCount {
  donationCount: number;
}

const DonationCount: React.FC<IDonationCount> = ({ donationCount }) => {
  return (
    <div className="shadow">
      <PieChart width={400} height={400}>
        <Pie
          data={[{ name: "Total Donation", value: donationCount }]}
          cx={200}
          cy={200}
          labelLine={false}
          label
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          <Cell fill="#D53F34" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default DonationCount;
