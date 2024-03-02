import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { PhoneCall, Mail } from "lucide-react";
import Container from "../../utils/Container";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  logoutUser,
  useCureentToken,
} from "../../redux/features/auth/authSlice";
import ThemeModeButton from "../../utils/ThemeModeButton";

export default function Navbar() {
  const token = useAppSelector(useCureentToken);
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <div className="topNavbar bg-[#191F2D] text-white py-4">
        <Container>
          <nav className="flex items-center justify-between">
            <div className="sclIcon flex items-center mx-auto lg:mx-0">
              <div className="flex items-center cursor-pointer">
                <PhoneCall size={20} color="#fff" />
                <a
                  className="text-md ml-2 text-white"
                  href="tel:+8801646418365"
                >
                  +8801646418365
                </a>
              </div>
              <div className="flex items-center ml-5 text-white">
                <Mail size={20} color="#fff" />
                <a
                  className="text-md ml-2"
                  href="mailto:ahshan.habib026@gmail.com"
                >
                  info@winterclothes.com
                </a>
              </div>
            </div>
            <div className=" flex items-center">
              <NavLink className="text-md text-white" to="/">
                Terms & Condition
              </NavLink>
              <NavLink className="text-md mx-4 text-white" to="/">
                Privacy Policy
              </NavLink>
              <div>
                <ThemeModeButton />
              </div>
            </div>
          </nav>
        </Container>
      </div>
      <hr className=" w-full border-slate-700" />
      <div className="mainNavbar py-4 shadow-lg">
        <Container>
          <nav>
            <div className="flex items-center justify-center flex-wrap lg:justify-between">
              <Link to="/" className="flex items-center ">
                <img className=" size-10" src={logo} alt="" />
                <span className="ml-2 text-xl font-semibold ">
                  Winter Clothes Donation
                </span>
              </Link>
              {token ? (
                <div className="pt-4 lg:pt-0">
                  <NavLink className="text-md" to="/winter-clothes">
                    All Winter Clothes
                  </NavLink>
                  <NavLink className="text-md mx-4" to="/dashboard">
                    Dashboard
                  </NavLink>
                  <button
                    onClick={() => dispatch(logoutUser())}
                    className="text-md  p-3 bg-red-500 text-white rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="pt-4 lg:pt-0">
                  <NavLink className="text-md" to="/winter-clothes">
                    All Winter Clothes
                  </NavLink>
                  <NavLink
                    className="text-md ml-4 border p-3 bg-[#191F2D] text-white rounded-lg"
                    to="/sign-in"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
}
