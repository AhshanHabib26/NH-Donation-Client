import { useState } from "react";
import Styles from "../styles/AboutUs.module.css";
import JoinVolunteerModal from "../components/ui/JoinVolunteerModal";
import Container from "../utils/Container";
import VolunteerImgOne from "../assets/images/VolunteerTwo.jpg";
import VolunteerImgTwo from "../assets/images/VolunteerThree.jpg";
import VolunteerImgV1 from "../assets/images/V1.jpg";
import VolunteerImgV2 from "../assets/images/V2.jpg";
import VolunteerImgV3 from "../assets/images/V3.jpg";
import VolunteerImgV4 from "../assets/images/V4.jpg";
import VolunteerImgV5 from "../assets/images/V5.jpg";
import VolunteerCard from "../components/ui/VolunteerCard";
import { TVolunteer } from "../types/types";
import { useAppSelector } from "../redux/hooks";
import { useCureentThemeMode } from "../redux/features/theme/themeSlice";

const VolunteerData = [
  {
    id: 1,
    name: "Ahshan Habib",
    title: "Education Volunteer",
    avatar: VolunteerImgOne,
  },
  {
    id: 2,
    name: "Robert Fox",
    title: "Social Change Volunteer",
    avatar: VolunteerImgTwo,
  },
  {
    id: 3,
    name: "Dainne Russel",
    title: "HealthCare Volunteer",
    avatar: VolunteerImgV1,
  },
  {
    id: 4,
    name: "Avery James",
    title: "Volunteer",
    avatar: VolunteerImgV2,
  },
  {
    id: 5,
    name: "Avery James",
    title: "Volunteer",
    avatar: VolunteerImgV3,
  },
  {
    id: 6,
    name: "James Wyatt",
    title: "HealthCare Volunteer",
    avatar: VolunteerImgV4,
  },
  {
    id: 7,
    name: "Jesse Joe",
    title: "Education Volunteer",
    avatar: VolunteerImgV5,
  },
];

export default function AboutUs() {
  const [opened, setOpened] = useState<boolean>(false);
  const mode = useAppSelector(useCureentThemeMode);

  return (
    <div>
      <div
        className={`${Styles.AboutUsBanner} h-[200px] flex justify-center items-center`}
      >
        <button onClick={() => setOpened(true)} className={Styles.myBtn}>
          Join our Volunteer Teams
        </button>
      </div>
      <div className="my-8">
        <Container>
          <h1
            className={`text-center text-xl lg:text-2xl font-semibold ${
              mode ? "text-[#D53F34]" : "text-[#191F2D]"
            }`}
          >
            Our Valuable and respected Volunteer list
          </h1>
          <p className="text-center text-md max-w-[100ch] mx-auto mt-2">
            NH Donation is a renowned volunteer organization trying to build an
            interdependent Bangladesh through volunteering to achieve the
            country's highest potential and growth in every youth of Bangladesh.{" "}
          </p>
          <div className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 lg:mx-auto max-w-5xl">
              {VolunteerData.map((volunteer: TVolunteer) => (
                <VolunteerCard volunteer={volunteer} />
              ))}
            </div>
          </div>
        </Container>
      </div>
      <JoinVolunteerModal opened={opened} setOpened={setOpened} />
    </div>
  );
}
