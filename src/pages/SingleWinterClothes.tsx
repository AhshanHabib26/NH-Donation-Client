import BackgroundImage from "../utils/BackgroundImage";
import JacketImg from "../assets/images/Jacket.jpg";
import { CheckSquare } from "lucide-react";
import { Link } from "react-router-dom";
export default function SingleWinterClothes() {
  const sizeBGColors = [
    "bg-blue-200",
    "bg-red-200",
    "bg-green-200",
    "bg-orange-200",
  ];

  const data = {
    id: 1,
    title:
      "Hanes Men's Hoodie, Ecosmart Fleece Full-zip Hoodie, Zip-up Hooded Sweatshirt for Men ",
    image: JacketImg,
    description: [
      "FLEECE TO FEEL GOOD ABOUT - Eco Smart mid-weight cotton/poly fleece with up to 5% of the poly fibers.",
      "CLASSIC ZIP-FRONT SILHOUETTE - Full-zip front with a drawstring hood and front pockets.",
      "MADE TO STAY SOFT - Pill-resistant durable fleece stays warm and cozy.",
      "HOLDS ITS SHAPE - Thanks to ribbed cuffs and hem.",
      "MADE TO LAST - Double-needle stitching at the neck and armhole seams for quality and durability, plus a dyed-to-match drawstring at the hood.",
      "CONVENIENT TEARAWAY TAGS - Getting rid of itchy tags is super easy. Simply tear it off for comfort that lasts all day.",
    ],
    category: "Jacket",
    size: ["Small", "Medium", "Large", "X-Large"],
  };

  return (
    <div>
      <BackgroundImage>
        <div className="my-10  mx-auto text-center w-3/4 text-xl">
          <h1 className=" bg-[#191F2D] text-white rounded-lg p-3 ">
            {data.title}
          </h1>
        </div>
      </BackgroundImage>
      <div className="max-w-5xl mx-auto border border-[#bfbfc0] border-dotted my-12 rounded-lg p-3">
        <div className="flex items-center justify-center">
          <img className="w-[300px]" src={data.image} alt="" />
        </div>
        <div className="my-8">
          <div className="flex items-center">
            <h1 className="text-lg font-medium">
              Product Title:
            </h1>
            <span className="text-md ml-2">{data.title}</span>
          </div>
          <div className="flex items-center my-1">
            <h1 className="text-lg  font-medium">
              Product Category:
            </h1>
            <span className="text-md ml-2">{data.category}</span>
          </div>
          <div className="flex items-center">
            <h1 className="text-lg  font-medium">
              Available Size:{" "}
            </h1>
            {data.size.map((item, index) => (
              <p
                className={`border ml-2 px-2 py-1 rounded-md cursor-pointer text-md ${
                  sizeBGColors[index % sizeBGColors.length]
                }`}
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="my-1">
            <h1 className="text-lg  font-medium">Product Description:</h1>
            {data.description.map((item, index) => (
              <div className="flex items-center" key={index}>
                <CheckSquare size={20} color="#f86156"  />
                <p className="text-md ml-2">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
            <Link className="bg-[#D53F34] px-4 py-3 text-white rounded-md cursor-pointer" to="/">Donation Now</Link>
        </div>
      </div>
    </div>
  );
}
