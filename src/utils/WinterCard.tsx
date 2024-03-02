import { Link } from "react-router-dom";
import { TWinterCardProps } from "../types/types";
import Styles from "../styles/WinterCard.module.css";
import { useAppSelector } from "../redux/hooks";
import { useCureentThemeMode } from "../redux/features/theme/themeSlice";

const WinterCard: React.FC<TWinterCardProps> = ({ winter }) => {
  const mode = useAppSelector(useCureentThemeMode);

  const { _id, title, image, size, category, description } = winter;
  const sizeBGColors = [
    "bg-blue-200",
    "bg-red-200",
    "bg-green-200",
    "bg-orange-200",
  ];

  const sizeBGColorsDarkMode = [
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-orange-400",
  ];

  Styles.mainCard;

  return (
    <div
      className={`${
        mode
          ? `${Styles.mainCard} border border-slate-900 border-dashed`
          : `${Styles.mainCard} border rounded-xl`
      }`}
    >
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
          className={`${Styles.cardTitle} ${
            mode ? "" : "text-[#191F2D]"
          } text-xl font-medium my-4`}
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
                className={` ml-2 px-2 py-1 rounded-md cursor-pointer text-md ${
                  mode
                    ? ` ${
                        sizeBGColorsDarkMode[
                          index % sizeBGColorsDarkMode.length
                        ]
                      }`
                    : ` ${sizeBGColors[index % sizeBGColors.length]}`
                }`}
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-start justify-start ">
          <Link
            className={`${Styles.cardBtn}  ${
              mode ? "bg-[#D53F34]" : "bg-[#191F2D] "
            } p-3 rounded-lg text-white cursor-pointer`}
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
