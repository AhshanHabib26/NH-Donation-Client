import Styles from "../styles/BackgroundImage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleClothesQuery } from "../redux/features/clothe/clotheApi";
import { useAppSelector } from "../redux/hooks";
import {
  useCureentToken,
  useCureentUser,
} from "../redux/features/auth/authSlice";
import { useCreateNewDataMutation } from "../redux/features/newClothe/newClotheApi";
import Swal from "sweetalert2";
import SingleClothesLoader from "../lib/SingleClothesLoader";
import { useCureentThemeMode } from "../redux/features/theme/themeSlice";
export default function SingleWinterClothes() {
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
  const { id } = useParams();
  const mode = useAppSelector(useCureentThemeMode);
  const token = useAppSelector(useCureentToken);
  const user = useAppSelector(useCureentUser);
  const navigate = useNavigate();
  const [createNewData] = useCreateNewDataMutation();
  const { data, isLoading } = useGetSingleClothesQuery(id);

  if (isLoading) {
    return <SingleClothesLoader />;
  }

  type TNewUserData = {
    name: string;
    email: string;
    title: string;
    image: string;
    category: string;
    size: string[];
    description: string;
  };

  const newUserData: TNewUserData = {
    // @ts-ignore
    name: user?.name,
    // @ts-ignore
    email: user?.email,
    title: data.data.title,
    image: data.data.image,
    category: data.data.category,
    size: data.data.size,
    description: data.data.description,
  };

  const handleDonationData = async () => {
    if (!token) {
      navigate("/sign-in");
    } else {
      Swal.fire({
        title: "Donate Us!",
        text: "Happiness doesn't result from what we get, but from what we give!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Donate Success!",
            text: "Thanks for donate & support us!",
            icon: "success",
          });
          createNewData(newUserData);
          navigate("/dashboard");
        }
      });
    }
  };

  return (
    <div>
      <div className={`${mode ? "py-5" : `${Styles.bgImage} py-14`}`}>
        <div className="mx-auto text-center max-w-4xl text-xl">
          <h1
            className={`${
              mode ? "bg-[#D53F34]" : "bg-[#191F2D]"
            } text-white rounded-lg p-2`}
          >
            {data?.data?.title}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-5 lg:mx-auto mt-5">
        <div className="flex items-center justify-center">
          <img
            className="w-[300px] h-[300px] object-cover"
            src={data?.data?.image}
            alt=""
          />
        </div>
        <div className="my-8">
          <div className="flex items-center flex-wrap">
            <h1 className="text-lg font-medium">Product Title:</h1>
            <span className="text-md ml-2">{data?.data?.title}</span>
          </div>
          <div className="flex items-center my-1 flex-wrap">
            <h1 className="text-lg  font-medium">Product Category:</h1>
            <span className="text-md ml-2">{data?.data?.category}</span>
          </div>
          <div className="flex items-center flex-wrap">
            <h1 className="text-lg  font-medium">Available Size: </h1>
            {data?.data?.size.map((item: string, index: number) => (
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
          <div className="my-2 lg:my-1">
            <h1 className="text-lg  font-medium">Product Description:</h1>
            <p>{data?.data?.description}</p>
          </div>
          <div className=" mt-8 flex items-end justify-end">
            <button
              className={`bg-[#D53F34] px-4 py-3 text-white rounded-md ${
                !token && "cursor-not-allowed"
              }`}
              onClick={handleDonationData}
            >
              Donation Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
