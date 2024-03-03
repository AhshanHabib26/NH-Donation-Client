import Container from "../../utils/Container";
import Styles from "../../styles/Testimonial.module.css";
import { Swiper as SwiperComponent } from "swiper/react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useAppSelector } from "../../redux/hooks";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";
import { useGetAllTestimonialQuery } from "../../redux/features/testimonial/testimonialApi";
import TestimonialLoader from "../../lib/TestimonialLoader";

type TTestimonialData = {
  _id: string;
  name: string;
  image: string;
  description: string;
};

export default function Testimonial() {
  const mode = useAppSelector(useCureentThemeMode);
  const { data, isLoading } = useGetAllTestimonialQuery("");

  if (isLoading) {
    return <TestimonialLoader />;
  }

  return (
    <div className="mt-20">
      <div
        className={`${
          mode
            ? `bg-gradient-to-r from-[#414141] to-[#182727] p-4`
            : `${Styles.TBG} p-4`
        }`}
      >
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
                {data?.data.map((tm: TTestimonialData) => (
                  <SwiperSlide key={tm._id}>
                    <div className=" p-4 max-w-3xl mx-5 lg:mx-auto ">
                      <p className="text-md text-center">{tm.description}</p>
                      <div className="flex items-center justify-center my-8">
                        <img
                          className="w-[50px] h-[50px] object-cover rounded-full"
                          src={tm.image}
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
