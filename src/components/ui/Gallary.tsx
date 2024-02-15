import Container from "../../utils/Container";
import GallaryOne from "../../assets/images/Gallary1.png";
import GallaryTwo from "../../assets/images/Gallary2.png";
import GallaryThree from "../../assets/images/Gallary3.png";
import GallaryFour from "../../assets/images/Gallary4.png";
import GallaryFive from "../../assets/images/Gallary5.png";
import GallarySix from "../../assets/images/Gallary6.png";
import Styles from "../../styles/Gallary.module.css";

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

export default function Gallary() {
  return (
    <div>
      <Container>
        <div className="text-center mb-14">
          <p className="text-lg font-light text-[#D53F34]">
            Our Regular Program
          </p>
          <h1 className="text-4xl font-semibold">Be a Hero, Change a Life!</h1>
        </div>
        <div className="max-w-5xl mx-5 lg:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {gallaryData.map((data) => (
              <div className={`${Styles.gallary} relative`} key={data.id}>
                <img
                  className={`${Styles.gallaryImage} cursor-pointer opacity-85 w-full h-[200px] object-cover relative`}
                  src={data.image}
                  alt=""
                />
                <p className={Styles.galleryInfo}>{data.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
