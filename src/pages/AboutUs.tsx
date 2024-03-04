import { useState } from "react";
import Styles from "../styles/AboutUs.module.css";
import JoinVolunteerModal from "../components/ui/JoinVolunteerModal";
export default function AboutUs() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`${Styles.AboutUsBanner} h-[200px] flex justify-center items-center`}
      >
        <button
          onClick={() => setOpened(true)}
          className=" mx-5 bg-[#191F2D] text-white p-4 text-lg uppercase rounded-lg hover:bg-[#232b3b]"
        >
          Join our Volunteer Teams
        </button>
      </div>
      <JoinVolunteerModal opened={opened} setOpened={setOpened} />
    </div>
  );
}
