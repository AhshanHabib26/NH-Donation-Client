import Styles from "../../styles/Volunteers.module.css";
import { Info } from "lucide-react";

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
  return (
    <div>
      <div key={volunteer.id} className={`${Styles.volunterMain} relative`}>
        <img
          className={`${Styles.volunterImg} w-full h-[350px] rounded-xl object-cover mx-auto shadow relative opacity-85 cursor-pointer`}
          src={volunteer.avatar}
          alt=""
        />
        <Info className={Styles.infoIcon} size={25} />

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
