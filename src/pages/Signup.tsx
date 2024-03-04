import { Link, useNavigate } from "react-router-dom";
import { TSignUpInputs } from "../types/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useCureentThemeMode } from "../redux/features/theme/themeSlice";
import { useAppSelector } from "../redux/hooks";

export default function Signup() {
  const mode = useAppSelector(useCureentThemeMode);
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSignUpInputs>();

  const onSubmit: SubmitHandler<TSignUpInputs> = async (data) => {
    try {
      const res = await registerUser(data).unwrap();
      console.log(res);
      toast.success(res.message, { id: "authId" });
      reset();
      navigate("/sign-in");
    } catch (error: any) {
      if (error?.data?.message) {
        toast.error(error.data.message, { id: "authId" });
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <div
        className={`${
          mode
            ? "max-w-xl mx-4 lg:mx-auto mt-16 p-4 shadow-2xl border border-slate-700  rounded-lg"
            : "max-w-xl mx-4 lg:mx-auto mt-16 p-4 shadow-lg border border-gray-200 rounded-lg"
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl text-center uppercase font-semibold text-[#D53F34]">
            Sign up
          </h1>
          <hr
            className={` ${
              mode
                ? "mb-6 w-[15%] mx-auto border-[#474747]"
                : "mb-6 w-[15%] mx-auto border-[#fdd6d3]"
            }`}
          />
          <div>
            <input
              className="w-full h-[50px] outline-none border text-[#191F2D] rounded-sm pl-2"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div>
            <input
              className="w-full h-[50px] text-[#191F2D] outline-none border rounded-sm pl-2 mt-3"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="my-3">
            <input
              className="w-full h-[50px] text-[#191F2D] outline-none border rounded-sm pl-2"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <input
            className={` ${
              mode ? "bg-[#D53F34]" : "bg-[#191F2D]"
            } w-[120px] h-[50px] text-white text-lg rounded-sm cursor-pointer`}
            type="submit"
            value={`${isLoading ? "loading..." : "Sign up"}`}
          />
          <p className="text-md mt-3  text-center font-medium">
            Already have an account?
            <Link className="ml-1 text-[#D53F34]" to="/sign-in">
              Sign in
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
