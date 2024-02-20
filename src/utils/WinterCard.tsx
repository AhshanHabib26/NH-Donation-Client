import { Link } from "react-router-dom";
import { TWinterCardProps } from "../types/types";
import Styles from "../styles/WinterCard.module.css";

const WinterCard: React.FC<TWinterCardProps> = ({ winter }) => {
  const { _id, title, image, size, category, description } = winter;
  const sizeBGColors = [
    "bg-blue-200",
    "bg-red-200",
    "bg-green-200",
    "bg-orange-200",
  ];

  return (
    <div className={`${Styles.mainCard} border rounded-xl`}>
      <div className=" flex items-center justify-center p-2">
        <img
          className={`${Styles.cardImage} h-[180px] object-cover`}
          src={image}
          alt=""
        />
      </div>

      <div className="p-4">
        <span className="bg-[#D53F34] px-4 py-1 text-white text-md rounded-md">
          {category}
        </span>

        <h1
          className={`${Styles.cardTitle} text-[#191F2D] text-xl font-medium my-4`}
        >{`${title.slice(0, 50)}...`}</h1>
        <div className={`${Styles.cardDescription} hidden mb-4`}>
          <h1 className="text-lg text-[#D53F34] font-light">
            Product Description:
          </h1>
          <p className="text-white">{`${description.slice(0, 150)}...`}</p>
        </div>
        <div className="flex items-end justify-end">
          <div className="flex items-center">
            {size.map((item, index) => (
              <p
                className={`border ml-2 px-2 py-1 rounded-md cursor-pointer text-md ${
                  sizeBGColors[index % sizeBGColors.length]
                }`}
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-end justify-end ">
          <Link
            className={`${Styles.cardBtn} bg-[#191F2D] px-5 py-3 rounded-lg text-white cursor-pointer`}
            to={`/winter-clothes/${_id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WinterCard;
