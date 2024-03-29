import Container from "../../utils/Container";
import clothesOne from "../../assets/icons/clothes-1.png";
import clothesTwo from "../../assets/icons/clothes-2.png";
import clothesThree from "../../assets/icons/clothes-3.png";
import { motion } from "framer-motion";
import { useAppSelector } from "../../redux/hooks";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";

const clothesData = [
  {
    id: 1,
    title: "Winter clothes fund",
    description:
      "The winter season is challenging for helpless people. Harsh weather conditions, cold temperatures, and limited resources",
    image: clothesOne,
  },
  {
    id: 2,
    title: "We can change the world",
    description:
      "Many a penny makes a pond; drops of water make the ocean. So if we work together we can change the world in a better way.",
    image: clothesTwo,
  },
  {
    id: 3,
    title: "You can help the poor",
    description:
      "Your donation can save millions of poor people around the world and make the world a better place",
    image: clothesThree,
  },
];

export default function BannerDescription() {
  const mode = useAppSelector(useCureentThemeMode);

  return (
    <div className="mt-20">
      <Container>
        <div className="text-center mb-14">
          <p className="text-lg font-light text-[#D53F34]">
            We Change Your Life & World
          </p>
          <h1 className="text-4xl font-semibold">
            With Your Support, Everyone Can Enjoy A Warm Cloth
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5 lg:mx-auto">
          {clothesData.map((cloth) => (
            <motion.div
              whileHover={{
                scale: 1.056,
                transition: { duration: 0.5 },
              }}
              key={cloth.id}
              className={` ${
                mode
                  ? "shadow rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:myGradiant hover:text-[#191F2D]"
                  : "shadow rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:myGradiant"
              }`}
            >
              <img className=" size-20 rounded-lg" src={cloth.image} alt="" />
              <div className="text-center mt-5">
                <h1 className="text-2xl font-semibold my-1">{cloth.title}</h1>
                <p className="text-md ">{cloth.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
