import { GripHorizontal } from "lucide-react";
import myAvatar from "../../assets/images/Avatar.png";
import myImage from "../../assets/images/myImg.jpg";

const userData = [
  {
    id: 1,
    userName: "Ahshan Habib",
    image: myImage,
    title:
      "SAS Raven Powder Free Nitrile Disposable Gloves | 7 Mil - Lg | Latex Free, Chemical + Puncture Resistant, Textured Grip, Single Use | for Automotive, Industrial, Janitorial, MRO, Food Service",
    feedback:
      "Many people say they want to help; fewer actually step up to do it. Thank you so much for being one of the few today and stepping up with your important donation.",
  },
  {
    id: 2,
    userName: "Shanzida Gazi",
    image: myAvatar,
    title: "Gildan Mens Heavy Blend Hooded Sweatshirt",
    feedback:
      "On behalf of everyone at our organization and the communities we serve, thank you for your kind donation to our capital campaign Winter Donation. This will ensure that we get to complete the work for our new facility which is required to reach and help more lives in need.",
  },
  {
    id: 3,
    userName: "Samia Islam",
    image: myAvatar,
    title: "Gildan Mens Heavy Blend Hooded Sweatshirt",
    feedback:
      "We are so appreciative of your gift and for enabling us to receive a matching donation from your employer. By choosing to donate and helping double the donation, you are also doubling the impact on the lives we support. We are doubly grateful!”",
  },
];

export default function CommunityCard() {
  return (
    <div className="mt-8">
      {userData.map((item) => (
        <div className="border  shadow-lg rounded-lg p-4 mb-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-[50px] h-[50px] rounded-full border border-gray-200"
                src={item.image}
                alt=""
              />
              <div className="ml-2">
                <h1 className="text-lg text-[#191F2D]">{item.userName}</h1>
                <p className="text-md text-gray-600">6 days ago</p>
              </div>
            </div>
            <div>
              <GripHorizontal color="#363636" className=" cursor-progress" />
            </div>
          </div>
          <div className="my-8">
            <h1 className="text-lg font-medium text-[#191F2D] mb-4">
              {item.title}
            </h1>
            <p className="text-md text-gray-600">{item.feedback}</p>
          </div>
          <div className=" flex items-center justify-between">
            <button className="border border-gray-200 px-6 w-full py-2 rounded-full cursor-pointer text-md text-gray-700 shadow">
              Comments
            </button>
            <button className="border border-gray-200 px-6 w-full py-2 rounded-full cursor-pointer mx-5 text-md text-gray-700 shadow">
              Follow
            </button>
            <button className="border border-gray-200 px-6 w-full py-2 rounded-full cursor-pointer text-md text-gray-700 shadow">
              Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
