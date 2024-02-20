import React, { useEffect, useState } from "react";
import { Modal } from "@mantine/core";
import toast from "react-hot-toast";
import {
  useGetSingleClothesQuery,
  useUpdateClothesMutation,
} from "../redux/features/clothe/clotheApi";

interface ModalFormProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  productId: string;
}

const ModalForm: React.FC<ModalFormProps> = ({
  opened,
  setOpened,
  productId,
}) => {
  const [clothes, setClothes] = useState({
    title: "",
    image: "",
    category: "",
    size: ["", "", "", ""],
    description: "",
  });

  const { data, isLoading } = useGetSingleClothesQuery(productId);
  const [updateClothes] = useUpdateClothesMutation();

  useEffect(() => {
    if (!isLoading && data.data) {
      const { title, image, category, size, description } = data.data;
      const updatedSize = Array.isArray(size) ? size : ["", "", "", ""];
      setClothes({
        title,
        image,
        category,
        size: [...updatedSize],
        description,
      });
    }
  }, [data, isLoading]);

  if (isLoading) {
    return <h1>Something Went Wrong</h1>;
  }

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
      const res = await updateClothes({ id: productId, data: clothes });

      toast.success(res.data.message);
      setOpened(false);
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
    <div>
      <Modal size={"xl"} opened={opened} onClose={() => setOpened(false)}>
        <div className=" p-1 ">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                className="text-md font-medium text-slate-500"
                htmlFor="title"
              >
                Clothes Title
              </label>
              <input
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
              <label
                className="text-md font-medium text-slate-500"
                htmlFor="size"
              >
                Clothes Size
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {clothes.size.map((value: string, index: number) => (
                  <input
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
                name="description"
                id=""
              ></textarea>
            </div>
            <input
              className="px-4 py-3 bg-[#191F2D] text-white text-lg rounded-md cursor-pointer"
              type="submit"
              value="Update Clothes"
            />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
