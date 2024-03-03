import myImage from "../../assets/images/myImg.jpg";
import myAvatar from "../../assets/images/Avatar.png";
import { useAppSelector } from "../../redux/hooks";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";

const myCmData = [
  {
    id: 1,
    image: myImage,
    userName: "Ahshan Habib",
    userComment:
      "Thank you for your support and for your belief in doing good. We simply couldn’t do what we do without amazing people like you.",
  },
  {
    id: 2,
    image: myAvatar,
    userName: "Shanzida Islam",
    userComment:
      "We have a lot of work to do, and your generous donation helps us get that important work done.",
  },
];

export default function CommunityCommentsCard() {
  const mode = useAppSelector(useCureentThemeMode)
  return (
    <div className="px-2">
      <div className="flex items-center">
        <h1 className={`text-lg font-semibold ${ mode ? "text-gray-400" : "text-gray-700"}`}>Comments</h1>
        <p className="ml-1 text-lg text-gray-500 font-semibold">({myCmData.length})</p>
      </div>
      {myCmData.map((comment) => (
        <div className="py-4">
          <div className="flex items-center">
            <img
              className="w-[35px] h-[35px] rounded-full shadow"
              src={comment.image}
              alt=""
            />
            <h1 className={`text-lg ml-2 font-semibold ${ mode ? "text-gray-300" : "text-gray-700"}`}>
              {comment.userName}
            </h1>
          </div>
          <div className="ml-8">
            <p className={`text-sm ${ mode ? "bg-gray-700" : "bg-gray-100"} p-2 rounded-lg`}>
              {comment.userComment}
            </p>
            <div className="flex items-center justify-between">
              <button className=" text-sm mt-1 px-2 cursor-pointer">
                Just Now
              </button>
              <button className=" text-sm mt-1 px-2 cursor-pointer">
                Like
              </button>
              <button className=" text-sm mt-1 px-2 cursor-pointer">
                Reply
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
