import { Table } from "@mantine/core";
import { useGetAllNewDataQuery } from "../redux/features/newClothe/newClotheApi";
import { useAppSelector } from "../redux/hooks";
import { useCureentThemeMode } from "../redux/features/theme/themeSlice";
import Loader from "../lib/Loader";
import { Crown } from "lucide-react";

interface IUserData {
  name: string;
  email: string;
}

const countUserData = (data: IUserData[]) => {
  const counts: { [key: string]: number } = {};
  data.forEach(({ name, email }) => {
    const key = `${name}-${email}`;
    counts[key] = (counts[key] || 0) + 1;
  });

  const countsArray = Object.keys(counts).map((key) => ({
    name: key.split("-")[0],
    email: key.split("-")[1],
    count: counts[key],
  }));

  countsArray.sort((a, b) => b.count - a.count);

  return countsArray.map((user) => ({
    ...user,
    isTopDonor: countsArray.indexOf(user) < 3,
  }));
};

export default function Leaderboard() {
  const mode = useAppSelector(useCureentThemeMode);
  const { data, isLoading } = useGetAllNewDataQuery("");

  if (isLoading) {
    return <Loader />;
  }

  const userData = countUserData(data?.result || []);

  return (
    <div>
      <h1
        className={`text-xl font-semibold text-center ${
          mode ? "text-[#fff]" : "text-[#191F2D]"
        } my-5`}
      >
        Top Donors Leaderboard
      </h1>
      <div className=" max-w-6xl mx-5 lg:mx-auto my-5 shadow">
        <Table>
          <Table.Thead>
            <Table.Tr
              className={`text-[16px] text-center ${
                mode ? "border border-slate-700" : "border border-slate-300"
              }`}
            >
              <Table.Th
                className={` ${mode ? "text-white" : "text-[#191F2D]"}`}
              >
                Name
              </Table.Th>
              <Table.Th
                className={` ${mode ? "text-white" : "text-[#191F2D]"}`}
              >
                Email
              </Table.Th>
              <Table.Th
                className={` ${mode ? "text-white" : "text-[#191F2D]"}`}
              >
                Total Donation
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {userData.map(({ name, email, count, isTopDonor }, index) => (
              <Table.Tr
                className={`${
                  mode ? "border border-slate-700" : "border border-slate-300"
                }`}
                key={index}
              >
                <Table.Td
                  className={`${mode ? "text-white" : "text-[#191F2D]"} flex items-center`}
                >
                  {name} {isTopDonor && <Crown size={18} color={`${mode ? "#D53F34" : "#191F2D"}`} className="ml-2" />}
                </Table.Td>
                <Table.Td
                  className={` ${mode ? "text-white" : "text-[#191F2D]"}`}
                >
                  {email}
                </Table.Td>
                <Table.Td
                  className={` ${mode ? "text-white" : "text-[#191F2D]"}`}
                >
                  {count}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
          <Table.Caption>Our Top Donors List</Table.Caption>
        </Table>
      </div>
    </div>
  );
}
