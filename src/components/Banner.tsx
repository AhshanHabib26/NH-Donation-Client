import Container from "../utils/Container";
import { Swiper as SwiperComponent } from "swiper/react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import BannerImg from "../assets/images/Banner.jpg";
import BannerImgOne from "../assets/images/Banner-1.jpeg";
import BannerImgTwo from "../assets/images/Banner-2.jpg";
import BackgroundImage from "../utils/BackgroundImage";
import { Link } from "react-router-dom";

const BannerData = [
  {
    id: 1,
    title: "Giving help to those who need it",
    image: BannerImg,
  },
  {
    id: 2,
    title: "The greatest gift is the gift of kindneess",
    image: BannerImgOne,
  },
  {
    id: 3,
    title: "Charity is the heartbeat of humanity",
    image: BannerImgTwo,
  },
];

export default function Banner() {
  return (
    <BackgroundImage>
      <Container>
        <div>
          <SwiperComponent className="mySwiper">
            {BannerData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex items-center justify-between flex-col lg:flex-row">
                  <div className="flex flex-1 flex-col">
                    <h1 className="text-5xl lg:text-7xl font-bold max-w-[10ch] text-[#191F2D] text-center lg:text-left">
                      {item.title}
                    </h1>
                    <div className="my-8">
                      <Link
                        className="bg-[#D53F34] px-6 py-4 text-lg text-white rounded-full font-light"
                        to="/"
                      >
                        Learn More
                      </Link>
                      <Link
                        className="bg-[#191F2D] px-6 py-4 ml-3 text-lg text-white rounded-full font-light"
                        to="/"
                      >
                        Donate Now
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center lg:justify-end my-5 lg:my-0">
                    <img
                      className=" w-[480px] h-[480px] rounded-3xl lg:rounded-3xl shadow-2xl opacity-80"
                      src={item.image}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </Container>
    </BackgroundImage>
  );
}
