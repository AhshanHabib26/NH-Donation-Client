import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { PhoneCall, Mail } from "lucide-react";
import Container from "../../utils/Container";

export default function Navbar() {
  return (
    <div className="">
      <div className="topNavbar bg-[#191F2D] text-white py-4">
        <Container>
          <nav className="flex items-center justify-between">
            <div className="sclIcon flex items-center mx-auto lg:mx-0">
              <div className="flex items-center cursor-pointer">
                <PhoneCall size={20} color="#fff" />
                <a className="text-md ml-2 text-white" href="tel:+8801646418365">
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
            <div className="info hidden lg:block">
              <NavLink className="text-md text-white" to="/">
                Terms & Condition
              </NavLink>
              <NavLink className="text-md mx-4 text-white" to="/">
                Privacy Policy
              </NavLink>
              <NavLink
                className="text-md text-white p-3 bg-[#D53F34] rounded-md focus:bg-[#eb463b]"
                to="/"
              >
                Donate Now
              </NavLink>
            </div>
          </nav>
        </Container>
      </div>
      <div className="mainNavbar py-4">
        <Container>
          <nav>
            <div className="flex items-center justify-center flex-wrap lg:justify-between">
              <Link to="/" className="flex items-center ">
                <img className=" size-10" src={logo} alt="" />
                <span className="ml-2 text-xl font-semibold ">
                  Winter Clothes Donation
                </span>
              </Link>
              <div className="pt-4 lg:pt-0">
                <NavLink className="text-md" to="/winter-clothes">
                  All Winter Clothes
                </NavLink>
                <NavLink className="text-md mx-4" to="/dashboard">
                  Dashboard
                </NavLink>
                <NavLink className="text-md" to="/sign-in">
                  Signin
                </NavLink>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
}
