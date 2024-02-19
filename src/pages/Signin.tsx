import { Link, useNavigate } from "react-router-dom";
import { TSignInInputs } from "../types/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/VerifyToken";

export default function Signin() {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSignInInputs>();

  const onSubmit: SubmitHandler<TSignInInputs> = async (data) => {
    try {
      const res = await loginUser(data).unwrap();
      const user = verifyToken(res.token);
      dispatch(setUser({ user: user, token: res.token }));
      toast.success(res.message, { id: "authId" });
      reset();
      navigate("/dashboard");
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
      <div className=" max-w-xl mx-4 lg:mx-auto mt-16 p-4 shadow-lg border border-gray-200 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-xl text-center uppercase font-semibold text-[#D53F34]">
            Sign in
          </h1>
          <hr className="mb-6 w-[20%] mx-auto border-[#fdd6d3]" />
          <div>
            <input
              className="w-full h-[50px] outline-none border rounded-sm pl-2 "
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="my-3">
            <input
              className="w-full h-[50px] outline-none border rounded-sm pl-2"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <p className=" text-lg text-[#D53F34] text-right">
            Lost your Password ?
          </p>
          <input
            className=" bg-[#191F2D] w-[120px] h-[50px] text-white text-lg rounded-sm cursor-pointer"
            type="submit"
            value="Sign in"
          />
          <p className="text-lg mt-3  text-center font-medium">
            Don't have an account?
            <Link className="ml-1 text-[#D53F34]" to="/sign-up">
              Sign up
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
