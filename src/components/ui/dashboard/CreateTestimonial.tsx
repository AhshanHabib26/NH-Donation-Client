import { useState } from "react";
import { useCureentThemeMode } from "../../../redux/features/theme/themeSlice";
import { useAppSelector } from "../../../redux/hooks";
import toast from "react-hot-toast";
import { useCreateTestimonialMutation } from "../../../redux/features/testimonial/testimonialApi";

export default function CreateTestimonial() {
  const mode = useAppSelector(useCureentThemeMode);
  const [createTestimonial] = useCreateTestimonialMutation();

  const [testimonial, setTestimonial] = useState({
    name: "",
    image: "",
    description: "",
  });

  const handleChange = (field: string, value: string) => {
    setTestimonial((prevTestimonial) => ({
      ...prevTestimonial,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await createTestimonial(testimonial).unwrap();
      toast.success(res.message, { id: "testimonialId" });
      setTestimonial({
        name: "",
        image: "",
        description: "",
      });
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        id: "testimonialId",
      });
    }
  };

  return (
    <div>
      <div
        className={`my-8  max-w-3xl mx-auto p-8 shadow-2xl border ${
          mode ? "border-slate-700" : "border-slate-300"
        } rounded-md`}
      >
        <h1
          className={`text-center text-xl font-medium uppercase mb-2 ${
            mode ? "text-white" : ""
          }`}
        >
          Create A Testimonial
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              className="text-md font-medium text-slate-500"
              htmlFor="name"
            >
              Name
            </label>
            <input
              required
              name="name"
              value={testimonial.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`w-full h-[50px] bg-transparent border ${
                mode
                  ? "border-slate-700 text-gray-200"
                  : "border-slate-300 text-[#191F2D]"
              } rounded-md pl-3 outline-none`}
              placeholder="Name"
            />
          </div>

          <div className="my-3">
            <label
              className="text-md font-medium text-slate-500"
              htmlFor="image"
            >
              Image
            </label>
            <input
              required
              name="image"
              value={testimonial.image}
              onChange={(e) => handleChange("image", e.target.value)}
              className={`w-full h-[50px] bg-transparent border ${
                mode
                  ? "border-slate-700 text-gray-200"
                  : "border-slate-300 text-[#191F2D]"
              } rounded-md pl-3 outline-none`}
              type="text"
              placeholder="Profile Image URL "
            />
          </div>
          <div className="my-3">
            <label
              className="text-md font-medium text-slate-500"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              value={testimonial.description}
              onChange={(e) => handleChange("description", e.target.value)}
              rows={4}
              className={`w-full h-[80px] bg-transparent border ${
                mode
                  ? "border-slate-700 text-gray-200"
                  : "border-slate-300 text-[#191F2D]"
              } rounded-md p-2 outline-none`}
              required
              name="description"
              id=""
              placeholder="Your description......."
            ></textarea>
          </div>
          <input
            className={`px-4 py-3 ${
              mode ? "bg-[#D53F34]" : "bg-[#191F2D]"
            } text-white text-lg rounded-md cursor-pointer`}
            type="submit"
            value="Add Testimonial"
          />
        </form>
      </div>
    </div>
  );
}
