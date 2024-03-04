import Styles from "../../styles/Volunteers.module.css";
import { Info } from "lucide-react";
import { Tooltip } from "@mantine/core";
import { useAppSelector } from "../../redux/hooks";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";

interface IVolunteer {
  id: number;
  avatar: string;
  name: string;
  title: string;
}

interface IVolunteerCardProps {
  volunteer: IVolunteer;
}

const VolunteerCard: React.FC<IVolunteerCardProps> = ({ volunteer }) => {
  const mode = useAppSelector(useCureentThemeMode);
  return (
    <div>
      <div key={volunteer.id} className={`${Styles.volunterMain} relative`}>
        <img
          className={`${Styles.volunterImg} w-full h-[350px] rounded-xl object-cover mx-auto shadow relative opacity-85 cursor-pointer`}
          src={volunteer.avatar}
          alt=""
        />
        <Tooltip
          color={`${mode ? "#2C64E9" : "#191F2D"}`}
          multiline
          w={140}
          withArrow
          position="left"
          transitionProps={{ transition: "skew-up", duration: 400 }}
          label="Info is Cooking!!"
        >
          <Info className={`${Styles.infoIcon} cursor-pointer`} size={25} />
        </Tooltip>

        <div
          className={`${Styles.volunterInfo} absolute bottom-0 left-0 bg-[#191F2D] px-4 py-2 rounded-tr-xl`}
        >
          <h1 className="text-white text-xl font-semibold">{volunteer.name}</h1>
          <p className="text-white text-lg font-medium">{volunteer.title}</p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
