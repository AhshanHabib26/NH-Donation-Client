import { FormEvent } from "react";
import CommunityCommentsCard from "./CommunityCommentsCard";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";
import { useAppSelector } from "../../redux/hooks";

export default function CommunityCommentsInput() {
  const mode = useAppSelector(useCureentThemeMode)
  const handlSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="my-4">
      <form onSubmit={handlSubmit}>
        <div>
          <textarea
            className={`border ${ mode ? " bg-transparent text-[#d6d6d6] border-gray-700" : ""} w-full p-2 rounded-lg outline-none text-gray-700  resize-none`}
            name="comment"
            id=""
            rows={4}
            placeholder="What's on your mind?"
          ></textarea>
          <div className=" flex items-end justify-end mt-1">
            <input
              className={`${ mode ? "bg-[#2C64E9]" : "bg-[#D53F34]"} px-4 py-2 text-md font-light text-white rounded-lg cursor-pointer`}
              type="submit"
              value="Comment"
            />
          </div>
        </div>
      </form>
      <hr className={`my-4 w-[80%] mx-auto ${ mode ? "border-gray-700" : "border-gray-300"}`} />
      <CommunityCommentsCard />
    </div>
  );
}
