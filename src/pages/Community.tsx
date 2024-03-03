import { HeartHandshake, Info } from "lucide-react";
import BackgroundImage from "../utils/BackgroundImage";
import { Link } from "react-router-dom";
import CommunityTabs from "../components/ui/CommunityTabs";
import CommunityInput from "../components/ui/CommunityInput";
import { Tooltip } from "@mantine/core";
import CommunityCard from "../components/ui/CommunityCard";
import { useAppSelector } from "../redux/hooks";
import { useCureentUser } from "../redux/features/auth/authSlice";
import Styles from "../styles/BackgroundImage.module.css";
import { useCureentThemeMode } from "../redux/features/theme/themeSlice";

interface IUser {
  name?: string;
}

export default function Community() {
  const user = useAppSelector(useCureentUser);
  const mode = useAppSelector(useCureentThemeMode);

  return (
    <div>
      <div className={`${mode ? "py-5" : `${Styles.bgImage} py-5`}`}>
        <div
          className={` ${
            mode ? "bg-[#D53F34]" : "bg-[#191F2D]"
          } mx-5 lg:mx-auto max-w-2xl p-8 rounded-lg shadow-2xl`}
        >
          <div>
            <HeartHandshake color="orange" size={35} />
            <h1 className="text-xl text-white">
              Hey{" "}
              <span
                className={`${mode ? "text-[#191F2D]" : "text-orange-400"}`}
              >
                {(user as IUser)?.name ?? "Guest"}!
              </span>
            </h1>
            <h1 className="text-white text-2xl">Welcome to the community!</h1>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 max-w-6xl mx-5 lg:mx-auto">
        <div>
          <CommunityInput />
          <CommunityCard />
        </div>
        <div>
          <div
            className={`border ${
              mode ? "border-gray-700" : "border-gray-300"
            } rounded-lg p-8 text-center`}
          >
            <h1
              className={`text-lg ${
                mode ? "text-[#D6D6D6]" : "text-[#191F2D]"
              } mb-3`}
            >
              Welcome to{" "}
              <span className=" italic font-semibold text-orange-600">
                NH Donation
              </span>{" "}
              Community Connect, share, and engage with community and build
              relationships.
            </h1>
            <p className=" text-md text-red-400 italic">
              {" "}
              Please log in if you are already a member or sign up for an
              account.
            </p>
            <div className="flex items-center justify-center lg:justify-between flex-col lg:flex-row mt-3 ">
              <Link
                className={`${
                  mode ? "bg-[#2c64e9]" : "bg-[#191F2D]"
                } text-white px-8 py-3 text-md rounded-lg cursor-pointer`}
                to="/sign-up"
              >
                Join Our Community
              </Link>
              <Link
                className=" bg-[#D53F34] text-white px-8 py-3 mt-3 lg:mt-0 text-md rounded-lg cursor-pointer"
                to="/sign-in"
              >
                Already a Member?
              </Link>
            </div>
          </div>
          <div
            className={`mt-8 border ${
              mode ? "border-gray-700" : "border-gray-300"
            } rounded-lg p-8`}
          >
            <div className="flex items-center justify-between mb-5">
              <h1
                className={`text-lg  ${
                  mode ? "text-[#D6D6D6]" : "text-[#191F2D]"
                }`}
              >
                Leaderboard
              </h1>
              <Tooltip
                color={`${mode ? "#2C64E9" : "#191F2D"}`}
                multiline
                w={300}
                withArrow
                position="left"
                label="Leaderboard are calculated based on the number of posts, replies and reactions"
                transitionProps={{ transition: "skew-up", duration: 400 }}
              >
                <Info size={22} className=" cursor-pointer" />
              </Tooltip>
            </div>
            <div>
              <CommunityTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
