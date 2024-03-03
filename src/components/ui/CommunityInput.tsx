import { useState } from "react";
import myImage from "../../assets/images/myImg.jpg";
import CommunityModal from "./CommunityModal";

export default function CommunityInput() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className=" border border-gray-300 rounded-lg p-8">
      <div className=" flex items-center">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={myImage}
          alt="User Image"
        />
        <input
          onClick={() => setOpened(true)}
          className="border w-full ml-3 h-[50px] text-left pl-3 bg-slate-100 outline-none rounded-lg cursor-pointer "
          type="button"
          value="Share your thoughts and warm wishes!"
        />
      </div>
      <CommunityModal opened={opened} setOpened={setOpened} />
    </div>
  );
}
