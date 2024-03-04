import { FormEvent } from "react";

export default function AboutUsForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <input
              className="w-full h-[50px] bg-transparent border border-gray-400 pl-2 rounded-lg outline-none"
              type="text"
              name="firstName"
              placeholder="First name"
              id=""
            />
            <input
              className="w-full h-[50px] bg-transparent border border-gray-400 pl-2 rounded-lg outline-none"
              type="text"
              name="lastName"
              placeholder="Last name"
              id=""
            />
          </div>
          <div className="my-3">
            <input
              className="w-full h-[50px] bg-transparent border border-gray-400 pl-2 rounded-lg outline-none"
              type="email"
              name="email"
              placeholder="Email address"
              id=""
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              className="w-full h-[50px] bg-transparent border border-gray-400 pl-2 rounded-lg outline-none"
              type="text"
              name="City"
              placeholder="City Name"
              id=""
            />
            <input
              className="w-full h-[50px] bg-transparent border border-gray-400 pl-2 rounded-lg outline-none"
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
              id=""
            />
          </div>
          <div className="my-3">
            <input
              className="w-full h-[50px] bg-transparent border border-gray-400 pl-2 rounded-lg outline-none"
              type="text"
              name="address"
              placeholder="Address"
              id=""
            />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input
              className="w-full h-[50px] bg-transparent border border-gray-400 pl-2 rounded-lg outline-none"
              type="text"
              name="telephone"
              placeholder="Mobile number"
              id=""
            />
            <input
              className="w-full h-[50px] bg-transparent border border-gray-400 pl-2 rounded-lg outline-none"
              type="text"
              name="profession"
              placeholder="Profession"
              id=""
            />
          </div>
          <div className="flex items-end justify-end">
            <input
              className="bg-[#191F2D] p-3 text-lg text-white font-light rounded-md cursor-pointer"
              type="submit"
              value="Join Now"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
