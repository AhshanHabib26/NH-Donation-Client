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
import { useState } from "react";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";

export default function Navbar() {
  const mode = useAppSelector(useCureentThemeMode);
  const token = useAppSelector(useCureentToken);
  const dispatch = useAppDispatch();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="">
      <div className="topNavbar bg-[#191F2D] text-white py-4">
        <Container>
          <nav className="flex items-center justify-center lg:justify-between flex-wrap mx-5 lg:mx-0">
            <div className="sclIcon flex items-center mx-auto lg:mx-0">
              <div className="flex items-center cursor-pointer">
                <PhoneCall size={18} color="#fff" />
                <a
                  className="text-md ml-1 text-white"
                  href="tel:+8801646418365"
                >
                  +8801646418365
                </a>
              </div>
              <div className="flex items-center ml-3 lg:ml-8 text-white">
                <Mail size={18} color="#fff" />
                <a
                  className="text-md ml-1"
                  href="mailto:ahshan.habib026@gmail.com"
                >
                  info@winterclothes.com
                </a>
              </div>
            </div>
            <div className=" flex items-center mt-3 lg:mt-0">
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
      <div className="mainNavbar py-4 shadow">
        <Container>
          <nav>
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center ">
                <img className=" size-10" src={logo} alt="" />
                <span className="ml-2 text-xl font-semibold ">NH Donation</span>
              </Link>

              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 focus:outline-none lg:hidden"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <div className="hidden lg:block">
                {token ? (
                  <div className="pt-4 lg:pt-0">
                    <NavLink className="text-md" to="/winter-clothes">
                      All Winter Clothes
                    </NavLink>
                    <NavLink className="text-md mx-2" to="/leaderboard">
                      Top Donors
                    </NavLink>
                    <NavLink className="text-md mx-2" to="/about-us">
                      About Us
                    </NavLink>
                    <NavLink className="text-md mr-2" to="/community">
                      Community
                    </NavLink>
                    <NavLink className="text-md mr-2" to="/dashboard">
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
                    <NavLink className="text-md mx-2" to="/leaderboard">
                      Top Donors
                    </NavLink>
                    <NavLink className="text-md mx-2" to="/about-us">
                      About Us
                    </NavLink>
                    <NavLink className="text-md mr-2" to="/community">
                      Community
                    </NavLink>
                    <NavLink
                      className={`text-md p-3 ${
                        mode ? "bg-[#D53F34]" : "bg-[#191F2D]"
                      } text-white rounded-lg`}
                      to="/sign-in"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </nav>
          {mobileMenuOpen && (
            <div className="mainNavbar lg:hidden ">
              <Container>
                <nav>
                  <div className=" flex flex-col items-start justify-start">
                    {token ? (
                      <div className="pt-4 lg:pt-0">
                        <NavLink
                          className="text-md block mb-1"
                          to="/winter-clothes"
                        >
                          All Winter Clothes
                        </NavLink>
                        <NavLink
                          className="text-md block mb-1"
                          to="/leaderboard"
                        >
                          Top Donors
                        </NavLink>
                        <NavLink className="text-md block mb-1" to="/about-us">
                          About Us
                        </NavLink>
                        <NavLink className="text-md block mb-1" to="/community">
                          Community
                        </NavLink>
                        <NavLink className="text-md block mb-2" to="/dashboard">
                          Dashboard
                        </NavLink>
                        <button
                          onClick={() => dispatch(logoutUser())}
                          className="text-md px-8 py-2 bg-red-500 text-white rounded-lg"
                        >
                          Logout
                        </button>
                      </div>
                    ) : (
                      <div className="pt-4 lg:pt-0">
                        <NavLink
                          className="text-md block mb-1"
                          to="/winter-clothes"
                        >
                          All Winter Clothes
                        </NavLink>
                        <NavLink
                          className="text-md block mb-1"
                          to="/leaderboard"
                        >
                          Top Donors
                        </NavLink>
                        <NavLink className="text-md block mb-1" to="/about-us">
                          About Us
                        </NavLink>
                        <NavLink className="text-md block mb-2" to="/community">
                          Community
                        </NavLink>
                        <NavLink
                          className={`text-md block text-center px-3 py-2 ${
                            mode ? "bg-[#D53F34]" : "bg-[#191F2D]"
                          } text-white rounded-lg`}
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
          )}
        </Container>
      </div>
    </div>
  );
}
