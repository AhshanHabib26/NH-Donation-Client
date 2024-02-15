import Banner from "../components/ui/Banner";
import BannerDescription from "../components/ui/BannerDescription";
import Gallary from "../components/ui/Gallary";
import WinterClothes from "../components/ui/WinterClothes";

export default function Home() {
  return (
    <div>
      <Banner />
      <BannerDescription />
      <WinterClothes />
      <Gallary />
    </div>
  );
}
