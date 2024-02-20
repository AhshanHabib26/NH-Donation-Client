import Banner from "../components/ui/Banner";
import BannerDescription from "../components/ui/BannerDescription";
import Blogs from "../components/ui/Blogs";
import Events from "../components/ui/Events";
import Footer from "../components/ui/Footer";
import GallarySlide from "../components/ui/GallarySlide";
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
      <GallarySlide />
      <WhatWeDo />
      <Testimonial />
      <Volunteers />
      <Events />
      <Blogs />
      <Footer />
    </div>
  );
}
