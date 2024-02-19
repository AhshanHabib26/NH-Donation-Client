import { useState } from "react";
import { useCreateClothesMutation } from "../../../redux/features/clothe/clotheApi";
import toast from "react-hot-toast";

export default function CreateWinterClothes() {
  const [createClothes] = useCreateClothesMutation();

  const [clothes, setClothes] = useState({
    title: "",
    image: "",
    category: "",
    size: ["", "", "", ""],
    description: "",
  });

  const handleSizeChange = (index: number, value: string) => {
    setClothes((prevSize) => {
      const newSizes = [...prevSize.size];
      newSizes[index] = value;
      return {
        ...prevSize,
        size: newSizes,
      };
    });
  };

  const handleChange = (field: string, value: string) => {
    setClothes((prevClothes) => ({
      ...prevClothes,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await createClothes(clothes).unwrap();
      toast.success(res.message, { id: "clothId" });
      setClothes({
        title: "",
        image: "",
        category: "",
        size: ["", "", "", ""],
        description: "",
      });
    } catch (error) {
      toast.error("An error occurred. Please try again.", { id: "clothId" });
    }
  };

  return (
    <div className="my-8  max-w-3xl mx-auto p-8 shadow-2xl border border-slate-300 rounded-md">
      <h1 className="text-center text-xl font-medium uppercase mb-4">
        Create Winter Clothes Product
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-md font-medium text-slate-500" htmlFor="title">
            Clothes Title
          </label>
          <input
            required
            name="title"
            value={clothes.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full h-[50px] bg-transparent border border-slate-300 rounded-md pl-3 outline-none focus:border-slate-400"
            placeholder="Clothes Title"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-3">
          <div>
            <label
              className="text-md font-medium text-slate-500"
              htmlFor="category"
            >
              Category
            </label>
            <input
              required
              name="category"
              value={clothes.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-full h-[50px] bg-transparent border border-slate-300 rounded-md pl-3 outline-none focus:border-slate-400"
              type="text"
              placeholder="Category"
            />
          </div>
          <div>
            <label
              className="text-md font-medium text-slate-500"
              htmlFor="image"
            >
              Clothes Image
            </label>
            <input
              required
              name="image"
              value={clothes.image}
              onChange={(e) => handleChange("image", e.target.value)}
              className="w-full h-[50px] bg-transparent border border-slate-300 rounded-md pl-3 outline-none focus:border-slate-400"
              type="text"
              placeholder="Clothes Image "
            />
          </div>
        </div>
        <div>
          <label className="text-md font-medium text-slate-500" htmlFor="size">
            Clothes Size
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {clothes.size.map((value, index) => (
              <input
                required
                key={index}
                type="text"
                placeholder="Clothes Size"
                value={value}
                onChange={(e) => handleSizeChange(index, e.target.value)}
                className="w-full h-[50px] bg-transparent border border-slate-300 rounded-md pl-3 outline-none focus:border-slate-400"
              />
            ))}
          </div>
        </div>
        <div className="my-3">
          <label
            className="text-md font-medium text-slate-500"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            value={clothes.description}
            onChange={(e) => handleChange("description", e.target.value)}
            rows={4}
            className="w-full  bg-transparent border border-slate-300 rounded-md pl-3 outline-none focus:border-slate-400"
            required
            name="description"
            id=""
          ></textarea>
        </div>
        <input
          className="px-4 py-3 bg-[#191F2D] text-white text-lg rounded-md cursor-pointer"
          type="submit"
          value="Add Clothes"
        />
      </form>
    </div>
  );
}
