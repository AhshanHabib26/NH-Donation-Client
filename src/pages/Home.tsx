import Banner from "../components/ui/Banner";
import BannerDescription from "../components/ui/BannerDescription";
import Gallary from "../components/ui/Gallary";
import Testimonial from "../components/ui/Testimonial";
import Volunteers from "../components/ui/Volunteers";
import WhatWeDo from "../components/ui/WhatWeDo";
import WinterClothes from "../components/ui/WinterClothes";

export default function Home() {
  return (
    <div>
      <Banner />
      <BannerDescription />
      <WinterClothes />
      <Gallary />
      <WhatWeDo />
      <Testimonial />
      <Volunteers />
    </div>
  );
}
