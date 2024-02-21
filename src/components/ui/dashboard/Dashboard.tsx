import Loader from "../../../lib/Loader";
import { useGetAllNewDataQuery } from "../../../redux/features/newClothe/newClotheApi";
import CategoryCount from "./chart/CategoryCount";
import DonationCount from "./chart/DonationCount";
import ProductNameCount from "./chart/ProductNameCount";

interface ITotalDonation {
  createdAt: string;
}

export default function Dashboard() {
  const { data, isLoading } = useGetAllNewDataQuery("");

  if (isLoading) {
    return <Loader />;
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
    (acc, curr) => {
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
    (acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    },
    {}
  );

  const categoryChartData = Object.keys(countByCategory).map(category => ({
    name: category,
    value: countByCategory[category]
  }));

  console.log(countByCategory)


/***********  Total Donation Product Count By Category ****************/

  return (
    <div>
      <h1 className="text-xl font-semibold text-[#191F2D] mb-5">
        Winter Clothes Data Info
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <DonationCount donationCount={donationCount} />
        <CategoryCount categoryChartData={categoryChartData}/>
      </div>
      <div className="my-8 shadow p-3">
        <ProductNameCount totalTitleChart={totalTitleChart} />
      </div>
    </div>
  );
}
