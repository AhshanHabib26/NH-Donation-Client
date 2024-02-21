import BackgroundImage from "../utils/BackgroundImage";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleClothesQuery } from "../redux/features/clothe/clotheApi";
import Loader from "../lib/Loader";
import { useAppSelector } from "../redux/hooks";
import {
  useCureentToken,
  useCureentUser,
} from "../redux/features/auth/authSlice";
import { useCreateNewDataMutation } from "../redux/features/newClothe/newClotheApi";
import Swal from "sweetalert2";
export default function SingleWinterClothes() {
  const sizeBGColors = [
    "bg-blue-200",
    "bg-red-200",
    "bg-green-200",
    "bg-orange-200",
  ];
  const { id } = useParams();
  const token = useAppSelector(useCureentToken);
  const user = useAppSelector(useCureentUser);
  const navigate = useNavigate();
  const [createNewData] = useCreateNewDataMutation();
  const { data, isLoading } = useGetSingleClothesQuery(id);

  if (isLoading) {
    return <Loader />;
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
      <BackgroundImage>
        <div className="mx-auto text-center w-3/4 text-xl">
          <h1 className=" bg-[#191F2D] text-white rounded-lg p-2 ">
            {data?.data?.title}
          </h1>
        </div>
      </BackgroundImage>
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
                className={`border ml-2 px-2 py-1 rounded-md cursor-pointer text-md  ${
                  sizeBGColors[index % sizeBGColors.length]
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
