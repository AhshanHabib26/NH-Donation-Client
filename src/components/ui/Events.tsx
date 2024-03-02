import Container from "../../utils/Container";
import EventImg from "../../assets/images/Events.jpg";
import { Swiper as SwiperComponent } from "swiper/react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import { Clock, MapPin } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { useAppSelector } from "../../redux/hooks";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";

const eventsData = [
  {
    id: 1,
    eventTitle: "Start a volunteer to reach your creative people",
    eventOrganizer: "WCD",
    eventDate: "05 March",
    eventTime: "9:30AM",
    eventAddress: "Dhaka, Bangladesh",
    eventVenue: "BAF Falcon Hall",
  },
  {
    id: 2,
    eventTitle: "How to build a loyal community offlines",
    eventOrganizer: "WCD",
    eventDate: "15 April",
    eventTime: "10:30AM",
    eventAddress: "Chittagong, Bangladesh",
    eventVenue: "Fortune Convention Hall",
  },
  {
    id: 3,
    eventTitle: "Charity caring is the new generation guide",
    eventOrganizer: "WCD",
    eventDate: "20 April",
    eventTime: "11:00AM",
    eventAddress: "Khulna, Bangladesh",
    eventVenue: "71 Convention Hall",
  },
  {
    id: 4,
    eventTitle: "How to build a loyal community offlines",
    eventOrganizer: "WCD",
    eventDate: "25 May",
    eventTime: "11:30AM",
    eventAddress: "Chandpur, Bangladesh",
    eventVenue: "The Waterfront Convention Hall",
  },
  {
    id: 5,
    eventTitle: "Education for poor children",
    eventOrganizer: "WCD",
    eventDate: "05 June",
    eventTime: "2:00PM",
    eventAddress: "Bagerhat, Bangladesh",
    eventVenue: "Celebrity Convention Hall",
  },
];

export default function Events() {
  const mode = useAppSelector(useCureentThemeMode);

  return (
    <div className="mt-20">
      <div
        className={`${
          mode
            ? "bg-gradient-to-r from-[#414141] to-[#182727] py-8"
            : "bg-gradient-to-r from-[#EDECDA] to-[#cdebea] py-8"
        }`}
      >
        <Container>
          <div className="text-center mb-6">
            <p className="text-lg font-light text-[#D53F34]">
              Help With Featured Cause
            </p>
            <h1 className="text-4xl font-semibold">
              Join Upcoming Events Replays & Webinars
            </h1>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
            <div className="hidden lg:block">
              <img
                className="relative rounded-2xl cursor-pointer opacity-85 hover:opacity-100"
                src={EventImg}
                alt=""
              />
            </div>
            <div className="flex items-center">
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
                modules={[Autoplay]}
                className="mySwiper"
              >
                <div>
                  {eventsData.map((event) => (
                    <SwiperSlide key={event.id}>
                      <div className="bg-white p-8 rounded-xl cursor-pointer shadow-inner">
                        <div className="flex items-center justify-between">
                          <p className="bg-[#D53F34] p-3 text-lg text-white rounded-md">
                            {event.eventDate}
                          </p>
                          <p className="text-lg font-semibold">
                            Organized By: {event.eventOrganizer}
                          </p>
                        </div>
                        <h1 className="mt-5 text-2xl font-semibold text-[#191F2D]">
                          Events: {event.eventTitle}
                        </h1>

                        <hr className="border-[#ffdedc] w-[80%] mx-auto my-6" />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock size={22} color="#D53F34" />
                            <h1 className="ml-2 text-lg font-semibold text-[#3b3f49]">
                              {event.eventTime}
                            </h1>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={20} color="#D53F34" />
                            <h1 className="ml-2 text-lg font-semibold text-[#3b3f49]">
                              {event.eventAddress}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </SwiperComponent>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
