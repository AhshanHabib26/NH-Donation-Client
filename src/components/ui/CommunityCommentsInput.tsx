import { FormEvent } from "react";
import CommunityCommentsCard from "./CommunityCommentsCard";

export default function CommunityCommentsInput() {
  const handlSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="my-4">
      <form onSubmit={handlSubmit}>
        <div>
          <textarea
            className="border w-full p-2 rounded-lg outline-none text-gray-700 resize-none"
            name="comment"
            id=""
            rows={4}
            placeholder="What's on your mind?"
          ></textarea>
          <div className=" flex items-end justify-end mt-1">
            <input
              className=" bg-[#D53F34] px-4 py-2 text-md font-light text-white rounded-lg cursor-pointer"
              type="submit"
              value="Comment"
            />
          </div>
        </div>
      </form>
      <hr className="my-4 w-[80%] mx-auto border-slate-200" />
      <CommunityCommentsCard />
    </div>
  );
}
