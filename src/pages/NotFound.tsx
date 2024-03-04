import { Link } from "react-router-dom";
import LightImg from "../assets/notFound/fileOne.gif";

export default function NotFound() {
  return (
    <div className=" max-w-lg mx-5 lg:mx-auto my-5">
      <img src={LightImg} alt="" />
      <Link className="  bg-[#D53F34] px-4 py-3 text-lg text-white rounded-lg cursor-pointer" to="/">Back Home</Link>
    </div>
  );
}
