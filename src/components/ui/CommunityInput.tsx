import myImage from "../../assets/images/myImg.jpg";

export default function CommunityInput() {
  return (
    <div className=" border border-gray-300 rounded-lg p-8">
      <div className=" flex items-center">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={myImage}
          alt="User Image"
        />
        <input
          disabled
          className="border w-full ml-3 h-[50px] text-left pl-3 bg-slate-100 outline-none rounded-lg cursor-pointer "
          type="text"
          placeholder="Share your thoughts and warm wishes!"
        />
      </div>
    </div>
  );
}
