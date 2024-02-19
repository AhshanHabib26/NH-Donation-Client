import BackgroundImage from "../utils/BackgroundImage";
import Container from "../utils/Container";
import WinterCard from "../utils/WinterCard";
import { useGetAllClothesQuery } from "../redux/features/clothe/clotheApi";
import Loader from "../lib/Loader";

export default function WinterClothes() {
  const { data, isLoading } = useGetAllClothesQuery("");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <BackgroundImage>
        <div className="my-10 bg-[#191F2D] mx-auto text-center w-[320px] p-3 rounded-lg text-xl uppercase shadow-2xl">
          <h1 className="text-white">All Winter Clothes</h1>
        </div>
      </BackgroundImage>
      <div className="my-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {data.data.map((winter: any) => (
              <WinterCard key={winter.id} winter={winter} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
