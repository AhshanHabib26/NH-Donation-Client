import Container from "../../utils/Container";
import profileImg from "../../assets/images/Banner-1.jpeg";
import profileImgOne from "../../assets/images/Banner-2.jpg";
import Styles from "../../styles/Testimonial.module.css";
import { Swiper as SwiperComponent } from "swiper/react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useAppSelector } from "../../redux/hooks";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";

const TestimonialData = [
  {
    id: 1,
    name: "Ahshan Habib",
    description:
      "In my retirement, I was searching for a way to give back and make a meaningful impact. WCD's Winter Special program has provided me with the opportunity to do just that. Their commitment to improving the lives of those facing the harsh realities of winter has touched my heart. It's fulfilling to be part of such a compassionate initiative. ",
    avatar: profileImgOne,
  },
  {
    id: 2,
    name: "Shanzida Sultana",
    description:
      "I've been a donor to WCD's Winter Special program for several years, and I am continuously impressed by their financial transparency and the tangible impact they create. Knowing that my contribution helps provide warmth, food, and support to those in need during the winter brings me a sense of fulfillment. WCD has earned my trust and respect. ",
    avatar: profileImg,
  },
  {
    id: 3,
    name: "Sakib Hussain",
    description:
      "In my retirement, I was searching for a way to give back and make a meaningful impact. WCD's Winter Special program has provided me with the opportunity to do just that. Their commitment to improving the lives of those facing the harsh realities of winter has touched my heart. It's fulfilling to be part of such a compassionate initiative. ",
    avatar: profileImgOne,
  },
  {
    id: 4,
    name: "Shanzida Sultana",
    description:
      "I've been a donor to WCD's Winter Special program for several years, and I am continuously impressed by their financial transparency and the tangible impact they create. Knowing that my contribution helps provide warmth, food, and support to those in need during the winter brings me a sense of fulfillment. WCD has earned my trust and respect. ",
    avatar: profileImg,
  },
  {
    id: 5,
    name: "Sakib Hussain",
    description:
      "In my retirement, I was searching for a way to give back and make a meaningful impact. WCD's Winter Special program has provided me with the opportunity to do just that. Their commitment to improving the lives of those facing the harsh realities of winter has touched my heart. It's fulfilling to be part of such a compassionate initiative. ",
    avatar: profileImgOne,
  },
  {
    id: 6,
    name: "Shanzida Sultana",
    description:
      "I've been a donor to WCD's Winter Special program for several years, and I am continuously impressed by their financial transparency and the tangible impact they create. Knowing that my contribution helps provide warmth, food, and support to those in need during the winter brings me a sense of fulfillment. WCD has earned my trust and respect. ",
    avatar: profileImg,
  },
];

export default function Testimonial() {
  const mode = useAppSelector(useCureentThemeMode);

  return (
    <div className="mt-20">
      <div className={`${mode ? `bg-gradient-to-r from-[#414141] to-[#182727] p-4` : `${Styles.TBG} p-4`}`}>
        <Container>
          <div className="text-center mb-4">
            <p className="text-lg font-light text-[#D53F34]">Testimonials</p>
            <h1 className="text-4xl font-semibold">What people say about us</h1>
          </div>
          <div>
            <SwiperComponent
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <div>
                {TestimonialData.map((tm) => (
                  <SwiperSlide key={tm.id}>
                    <div className=" p-4 max-w-3xl mx-5 lg:mx-auto ">
                      <p className="text-md text-center">{tm.description}</p>
                      <div className="flex items-center justify-center my-8">
                        <img
                          className="w-[50px] h-[50px] object-cover rounded-full"
                          src={tm.avatar}
                          alt=""
                        />
                        <h1 className="ml-2 text-lg font-semibold">
                          {tm.name}
                        </h1>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </SwiperComponent>
          </div>
        </Container>
      </div>
    </div>
  );
}
