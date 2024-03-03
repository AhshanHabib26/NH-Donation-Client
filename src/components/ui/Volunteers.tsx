import Container from "../../utils/Container";
import VolunteerImgOne from "../../assets/images/VolunteerTwo.jpg";
import VolunteerImgTwo from "../../assets/images/VolunteerThree.jpg";
import VolunteerCard from "./VolunteerCard";
import { TVolunteer } from "../../types/types";

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
    <div className="mt-20">
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
          {VolunteerData.map((volunteer: TVolunteer) => (
            <VolunteerCard volunteer={volunteer} />
          ))}
        </div>
      </Container>
    </div>
  );
}
