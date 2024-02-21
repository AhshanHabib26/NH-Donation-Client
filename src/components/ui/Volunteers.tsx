import Container from "../../utils/Container";
import VolunteerImgOne from "../../assets/images/VolunteerTwo.jpg";
import VolunteerImgTwo from "../../assets/images/VolunteerThree.jpg";
import Styles from "../../styles/Volunteers.module.css";
import { Info } from "lucide-react";

const VolunteerData = [
  {
    id: 1,
    name: "Ahshan Habib",
    title: "Education Volunteer",
    avatar: VolunteerImgTwo,
  },
  {
    id: 2,
    name: "Robert Fox",
    title: "Social Change Volunteer",
    avatar: VolunteerImgOne,
  },
  {
    id: 3,
    name: "Dainne Russel",
    title: "HealthCare Volunteer",
    avatar: VolunteerImgTwo,
  },
];

export default function Volunteers() {
  return (
    <div className="mt-24">
      <Container>
        <div className="text-center mb-14">
          <p className="text-lg font-light text-[#D53F34]">
            Meet Our Volunteers
          </p>
          <h1 className="text-4xl font-semibold">
            Awesome guys behind our charity activities
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 lg:mx-auto max-w-5xl">
          {VolunteerData.map((volunter) => (
            <div
              key={volunter.id}
              className={`${Styles.volunterMain} relative`}
            >
              <img
                className={`${Styles.volunterImg} w-full h-[350px] rounded-xl object-cover mx-auto shadow relative opacity-85 cursor-pointer`}
                src={volunter.avatar}
                alt=""
              />
              <Info className={Styles.infoIcon} size={25} />

              <div
                className={`${Styles.volunterInfo} absolute bottom-0 left-0 bg-[#191F2D] px-4 py-2 rounded-tr-xl`}
              >
                <h1 className="text-white text-xl font-semibold">
                  {volunter.name}
                </h1>
                <p className="text-white text-lg font-medium">
                  {volunter.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
