import { useState } from "react";
import myImage from "../../assets/images/myImg.jpg";
import CommunityModal from "./CommunityModal";
import { useAppSelector } from "../../redux/hooks";
import { useCureentToken } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";

export default function CommunityInput() {
  const [opened, setOpened] = useState<boolean>(false);
  const token = useAppSelector(useCureentToken);
  const navigate = useNavigate();
  const mode = useAppSelector(useCureentThemeMode);

  const handleInputOpened = () => {
    if (token) {
      setOpened(true);
    } else {
      toast("First create an account!", {
        icon: "🧐",
        id: "cmId",
      });
      navigate("/sign-up");
    }
  };

  return (
    <div
      className={`border ${
        mode ? "border-gray-700" : "border-gray-300"
      } rounded-lg p-8`}
    >
      <div className=" flex items-center">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={myImage}
          alt="User Image"
        />
        <input
          onClick={() => handleInputOpened()}
          className={`w-full ml-3 h-[50px] text-left pl-3 ${ mode? "bg-gray-700" : "bg-gray-200"} outline-none rounded-lg cursor-pointer`}
          type="button"
          value="Share your thoughts and warm wishes!"
        />
      </div>
      <CommunityModal opened={opened} setOpened={setOpened} />
    </div>
  );
}
