import Container from "../../utils/Container";
import WinterCard from "../../utils/WinterCard";
import { Link } from "react-router-dom";
import { useGetAllClothesQuery } from "../../redux/features/clothe/clotheApi";
import Loader from "../../lib/Loader";

export default function WinterClothes() {
  const { data, isLoading } = useGetAllClothesQuery("");

  if (isLoading) {
    return <Loader />;
  }


  return (
    <div className="my-28">
      <Container>
        <div className="text-center mb-14">
          <h1 className=" text-3xl lg:text-4xl font-semibold">
            Give People Emotional Warmth By Donate Clothes to Homeless.
          </h1>
          <p className="text-lg font-light text-[#D53F34] mt-3 max-w-[90ch] mx-auto">
            Share warmth, and donate gently used winter clothing. Help those in
            need stay comfortable during the cold season. Make a difference by
            joining the best charity to donate clothes.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {data.data.slice(0, 6).map((winter: any) => (
            <WinterCard winter={winter} key={winter._id} />
          ))}
        </div>
        <div className="mt-14 flex items-center justify-center">
          <Link
            className="bg-[#D53F34] p-3 border-dashed rounded-lg text-lg cursor-pointer text-white hover:bg-[#191F2D] hover:rounded-none"
            to="/winter-clothes"
          >
            View All Clothes
          </Link>
        </div>
      </Container>
    </div>
  );
}
