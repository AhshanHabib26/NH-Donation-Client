import Container from "../../utils/Container";
import GallaryOne from "../../assets/images/Gallary1.png";
import GallaryTwo from "../../assets/images/Gallary2.png";
import GallaryThree from "../../assets/images/Gallary3.png";
import GallaryFour from "../../assets/images/Gallary4.png";
import GallaryFive from "../../assets/images/Gallary5.png";
import GallarySix from "../../assets/images/Gallary6.jpg";
import { Swiper as SwiperComponent } from "swiper/react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const gallaryData = [
  {
    id: 1,
    title: "Winter Clothes Distribution Program 2024 in Dhaka, Bangladesh",
    image: GallaryOne,
  },
  {
    id: 2,
    title: "Winter Clothes Distribution Program 2024 in Chittagong, Bangladesh",
    image: GallaryTwo,
  },
  {
    id: 3,
    title: "Winter Clothes Distribution Program 2024 in Khulna, Bangladesh",
    image: GallaryThree,
  },
  {
    id: 4,
    title: "Winter Clothes Distribution Program 2024 in Barishal, Bangladesh",
    image: GallaryFour,
  },
  {
    id: 5,
    title: "Winter Clothes Distribution Program 2024 in Rangpur, Bangladesh",
    image: GallaryFive,
  },
  {
    id: 6,
    title: "Winter Clothes Distribution Program 2024 in Dinajpur, Bangladesh",
    image: GallarySix,
  },
];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function GallarySlide() {
  return (
    <div className="mt-20">
      <Container>
        <div className="text-center mb-8">
          <p className="text-lg font-light text-[#D53F34]">
            Our Regular Program
          </p>
          <h1 className="text-4xl font-semibold">Be a Hero, Change a Life!</h1>
        </div>
        <div>
          <div>
            <SwiperComponent
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 6500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <div>
                {gallaryData.map((gallery) => (
                  <SwiperSlide key={gallery.id}>
                    <div className="p-3 max-w-5xl mx-5 lg:mx-auto shadow-lg border border-dashed border-gray-100  rounded-lg">
                      <img
                        className="w-full h-[300px] lg:h-[400px] object-cover  rounded-t-lg"
                        src={gallery.image}
                        alt=""
                      />
                      <h1
                        className=" mb-6 p-2 text-center text-lg font-medium text-white rounded-b-lg"
                        style={{ backgroundColor: getRandomColor() }}
                      >
                        {gallery.title}
                      </h1>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </SwiperComponent>
          </div>
        </div>
      </Container>
    </div>
  );
}
