import Container from "../../utils/Container";
import WinterCard from "../../utils/WinterCard";
import JacketImg from "../../assets/images/Jacket.jpg";

export default function WinterClothes() {
  const winterData = [
    {
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
    },
    {
      id: 2,
      title: "MedPride Powder-Free Nitrile Exam Gloves, X-Large (Pack of 100)",
      image: JacketImg,
      description: [
        "Nitrile",
        " Imported",
        "The ideal solution for individuals sensitive to natural rubber latex and donning powder",
        "Comfortable fit with textured fingertips for excellent tactile sensitivity",
        " Extraordinary strength; stretchable durability and puncture resistance with premium iris blue color",
        " Commonly used by law enforcement professionals; tattoo artists; physicians and first responders",
        "Features smooth external finish and beaded cuff for extra durability",
      ],
      category: "Gloves",
      size: ["Small", "Medium", "Large", "X-Large"],
    },
    {
      id: 3,
      title: "MedPride Powder-Free Nitrile Exam Gloves, X-Large (Pack of 100)",
      image: JacketImg,
      description: [
        "Nitrile",
        " Imported",
        "The ideal solution for individuals sensitive to natural rubber latex and donning powder",
        "Comfortable fit with textured fingertips for excellent tactile sensitivity",
        " Extraordinary strength; stretchable durability and puncture resistance with premium iris blue color",
        " Commonly used by law enforcement professionals; tattoo artists; physicians and first responders",
        "Features smooth external finish and beaded cuff for extra durability",
      ],
      category: "Gloves",
      size: ["Small", "Medium", "Large", "X-Large"],
    },
    {
      id: 4,
      title: "MedPride Powder-Free Nitrile Exam Gloves, X-Large (Pack of 100)",
      image: JacketImg,
      description: [
        "Nitrile",
        " Imported",
        "The ideal solution for individuals sensitive to natural rubber latex and donning powder",
        "Comfortable fit with textured fingertips for excellent tactile sensitivity",
        " Extraordinary strength; stretchable durability and puncture resistance with premium iris blue color",
        " Commonly used by law enforcement professionals; tattoo artists; physicians and first responders",
        "Features smooth external finish and beaded cuff for extra durability",
      ],
      category: "Gloves",
      size: ["Small", "Medium", "Large", "X-Large"],
    },
  ];

  return (
    <div className="my-28">
      <Container>
        <div className="text-center mb-14">
          <h1 className=" text-3xl lg:text-4xl font-semibold">
            Give People Emotional Warmth By Donate Clothes to Homeless.
          </h1>
          <p className="text-lg font-light text-[#D53F34] mt-3 max-w-[90ch] mx-auto">
            Share warmth, and donate gently used winter clothing. Help those in
            need stay comfortable during the cold season. Make a difference by
            joining the best charity to donate clothes.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {winterData.slice(0, 3).map((winter) => (
            <WinterCard key={winter.id} winter={winter} />
          ))}
        </div>
      </Container>
    </div>
  );
}
