import Container from "../../utils/Container";
import { Swiper as SwiperComponent } from "swiper/react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import BannerImg from "../../assets/images/Banner.jpg";
import BannerImgOne from "../../assets/images/Banner-1.jpeg";
import BannerImgTwo from "../../assets/images/Banner-2.jpg";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { useAppSelector } from "../../redux/hooks";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";
import Styles from "../../styles/BackgroundImage.module.css";

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
  const mode = useAppSelector(useCureentThemeMode);

  return (
    <div className={`${mode ? "py-5" : `${Styles.bgImage} py-5`}`}>
      <Container>
        <div>
          <SwiperComponent
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
          >
            {BannerData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex items-center justify-between flex-col lg:flex-row">
                  <div className="flex flex-1 flex-col">
                    <h1
                      className={`${
                        mode
                          ? "text-5xl lg:text-7xl font-bold max-w-[10ch] text-[#fff] text-center lg:text-left"
                          : "text-5xl lg:text-7xl font-bold max-w-[10ch] text-[#191F2D] text-center lg:text-left"
                      }`}
                    >
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
                        className={` ${
                          mode
                            ? " bg-slate-300 px-6 py-4 ml-3 text-lg text-slate-800 rounded-full font-light"
                            : "bg-[#191F2D] px-6 py-4 ml-3 text-lg text-white rounded-full font-light"
                        }`}
                        to="/"
                      >
                        Donate Now
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center lg:justify-end my-5 lg:my-0">
                    <img
                      className=" w-[380px] lg:w-[450px] h-[380px] lg:h-[450px] rounded-3xl lg:rounded-3xl shadow-2xl opacity-80"
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
    </div>
  );
}
