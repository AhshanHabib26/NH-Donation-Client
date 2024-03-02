import DashboardLoader from "../../../lib/DashboardLoader";
import { useGetAllNewDataQuery } from "../../../redux/features/newClothe/newClotheApi";
import { useCureentThemeMode } from "../../../redux/features/theme/themeSlice";
import { useAppSelector } from "../../../redux/hooks";
import CategoryCount from "./chart/CategoryCount";
import DonationCount from "./chart/DonationCount";
import ProductNameCount from "./chart/ProductNameCount";

interface ITotalDonation {
  createdAt: string;
}

export default function Dashboard() {
  const mode = useAppSelector(useCureentThemeMode);
  const { data, isLoading } = useGetAllNewDataQuery("");

  if (isLoading) {
    return <DashboardLoader />;
  }

  /***********  Total Donation Count ****************/

  const totalDonation: string[] = data.result.map(
    (item: ITotalDonation) => item.createdAt
  );
  const donationCount = totalDonation.reduce((total: number) => total + 1, 0);

  /***********  Total Donation Count ****************/

  /***********  Total Donation Product Count By Title ****************/

  const totalTitles: string[] = data.result.map((t: any) => t.title);
  const countByTitle: { [key: string]: number } = totalTitles.reduce(
    (acc: { [key: string]: number }, curr: string) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    },
    {}
  );

  const totalTitleChart = Object.keys(countByTitle).map((title) => ({
    title,
    CountByProductTitle: countByTitle[title],
  }));

  /***********  Total Donation Product Count By Title ****************/

  /***********  Total Donation Product Count By Category ****************/

  const totalCategory: string[] = data.result.map((t: any) => t.category);
  const countByCategory: { [key: string]: number } = totalCategory.reduce(
    (acc: { [key: string]: number }, curr: string) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    },
    {}
  );

  const categoryChartData = Object.keys(countByCategory).map((category) => ({
    name: category,
    value: countByCategory[category],
  }));

  /***********  Total Donation Product Count By Category ****************/

  return (
    <div>
      <h1
        className={`text-xl font-semibold ${
          mode ? "text-[#fff]" : "text-[#191F2D]"
        } mb-5`}
      >
        Winter Clothes Data Info
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto">
        <DonationCount donationCount={donationCount} />
        <CategoryCount categoryChartData={categoryChartData} />
      </div>
      <div className="my-8 shadow p-3">
        <ProductNameCount totalTitleChart={totalTitleChart} />
      </div>
    </div>
  );
}
