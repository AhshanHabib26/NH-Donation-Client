import Container from "../../utils/Container";
import clotheImg from "../../assets/icons/clothes-1.png";
import careImg from "../../assets/icons/care.png";
import healthCareImg from "../../assets/icons/healthcare.png";
import helpImg from "../../assets/icons/help.png";
import houseImg from "../../assets/icons/house.png";
import numberImg from "../../assets/icons/numbers.png";
import Styles from "../../styles/WhatWeDo.module.css";

const whatWeDoData = [
  {
    id: 1,
    title: "Winter Clothes",
    description:
      "Donations enable the distribution of warm clothing, blankets, and essential shelter to individuals and families facing exposure to the elements. Many people struggle to access nutritious food during the winter. Winter donations help ensure that everyone can enjoy warm, nourishing meals.",
    image: clotheImg,
  },
  {
    id: 2,
    title: "Volunteering",
    description:
      "Donations enable the distribution of warm clothing, blankets, and essential shelter to individuals and families facing exposure to the elements. Many people struggle to access nutritious food during the winter. Winter donations help ensure that everyone can enjoy warm, nourishing meals.",
    image: helpImg,
  },
  {
    id: 3,
    title: "Health Care",
    description:
      "Donations enable the distribution of warm clothing, blankets, and essential shelter to individuals and families facing exposure to the elements. Many people struggle to access nutritious food during the winter. Winter donations help ensure that everyone can enjoy warm, nourishing meals.",
    image: healthCareImg,
  },
  {
    id: 4,
    title: "Residence Facilities",
    description:
      "Donations enable the distribution of warm clothing, blankets, and essential shelter to individuals and families facing exposure to the elements. Many people struggle to access nutritious food during the winter. Winter donations help ensure that everyone can enjoy warm, nourishing meals.",
    image: houseImg,
  },
  {
    id: 5,
    title: "Primary Education",
    description:
      "Donations enable the distribution of warm clothing, blankets, and essential shelter to individuals and families facing exposure to the elements. Many people struggle to access nutritious food during the winter. Winter donations help ensure that everyone can enjoy warm, nourishing meals.",
    image: numberImg,
  },
  {
    id: 1,
    title: "Social Care",
    description:
      "Donations enable the distribution of warm clothing, blankets, and essential shelter to individuals and families facing exposure to the elements. Many people struggle to access nutritious food during the winter. Winter donations help ensure that everyone can enjoy warm, nourishing meals.",
    image: careImg,
  },
];

export default function WhatWeDo() {
  return (
    <div className="mt-24">
      <Container>
        <div className="text-center mb-14">
          <p className="text-lg font-light text-[#D53F34]">What we do?</p>
          <h1 className="text-4xl font-semibold">
            We believe that we can save more life with you
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-5 lg:mx-auto">
            {whatWeDoData.map((item) => (
              <div className={`${Styles.WWDMain} flex items-start shadow p-3 hover:shadow-xl`}>
                <div className={`${Styles.WWDImgContainer} mr-8`}>
                  <img
                    className={`${Styles.WWDImg} w-[180px] `}
                    src={item.image}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className={`${Styles.WWDTitle} text-xl font-semibold`}>
                    {item.title}
                  </h1>
                  <p className="text-md">{`${item.description.slice(
                    0,
                    120
                  )}..`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
