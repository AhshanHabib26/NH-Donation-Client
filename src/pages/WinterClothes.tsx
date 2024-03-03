
import Container from "../utils/Container";
import WinterCard from "../utils/WinterCard";
import { useGetAllClothesQuery } from "../redux/features/clothe/clotheApi";
import Loader from "../lib/Loader";
import Styles from "../styles/BackgroundImage.module.css";
import { useCureentThemeMode } from "../redux/features/theme/themeSlice";
import { useAppSelector } from "../redux/hooks";

export default function WinterClothes() {
  const { data, isLoading } = useGetAllClothesQuery("");
  const mode = useAppSelector(useCureentThemeMode);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className={`${mode ? "py-5" : `${Styles.bgImage} py-5`}`}>
        <div className={`my-10 ${mode ? "bg-[#D53F34]" : "bg-[#191F2D]"} mx-auto text-center w-[320px] p-6 rounded-lg text-xl uppercase shadow-2xl`}>
          <h1 className="text-white">All Winter Clothes</h1>
        </div>
      </div>
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
