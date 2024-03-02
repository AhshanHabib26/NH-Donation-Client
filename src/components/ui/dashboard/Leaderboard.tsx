import { Table } from "@mantine/core";
import { useGetAllNewDataQuery } from "../../../redux/features/newClothe/newClotheApi";
import WinterClothesLoader from "../../../lib/WinterClothesLoader";
import { useAppSelector } from "../../../redux/hooks";
import { useCureentThemeMode } from "../../../redux/features/theme/themeSlice";

interface IUserData {
  name: string;
  email: string;
}

const countUserData = (
  data: IUserData[]
): { name: string; email: string; count: number }[] => {
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

  return countsArray;
};

export default function Leaderboard() {
  const mode = useAppSelector(useCureentThemeMode);
  const { data, isLoading } = useGetAllNewDataQuery("");

  if (isLoading) {
    return <WinterClothesLoader />;
  }

  const userData = countUserData(data?.result);

  return (
    <div>
      <h1
        className={`text-xl font-semibold ${
          mode ? "text-[#fff]" : "text-[#191F2D]"
        } mb-5`}
      >
        Top Donors Leaderboard
      </h1>
      <div className=" max-w-5xl mx-5 lg:mx-auto my-5 shadow">
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
            {userData.map(({ name, email, count }, index) => (
              <Table.Tr
                className={`${
                  mode ? "border border-slate-700" : "border border-slate-300"
                }`}
                key={index}
              >
                <Table.Td
                  className={`${mode ? "text-white" : "text-[#191F2D]"}`}
                >
                  {name}
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
