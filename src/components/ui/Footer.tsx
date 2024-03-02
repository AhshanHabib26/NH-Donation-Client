import Container from "../../utils/Container";
import logoImg from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import Styles from "../../styles/Footer.module.css";
import paypalImg from "../../assets/icons/paypal.jpg";
import masterImg from "../../assets/icons/master.jpg";
import visaImg from "../../assets/icons/visa.jpg";
import { useAppSelector } from "../../redux/hooks";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";

export default function Footer() {
  const mode = useAppSelector(useCureentThemeMode);

  return (
    <div className="mt-24">
      <div
        className={`${
          mode
            ? "bg-gradient-to-r from-[#414141] to-[#182727] py-8"
            : "bg-gradient-to-r from-[#f7f6e8] to-[#def7f6] py-8"
        }`}
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <div className="flex items-center">
                <img
                  className="w-[40px] h-[40px] object-cover"
                  src={logoImg}
                  alt=""
                />
                <h1 className="ml-2 text-lg font-semibold">WCD</h1>
              </div>
              <p className="text-md mt-2">
                Winter Clothes Donation (WCD) is one of the leading, non-profit
                organization, fully dedicated to humanitarian services since
                2022. WCD team and volunteers continue to work tirelessly for
                the relief of affected people across Bangladesh and in the
                region.{" "}
              </p>
            </div>
            <div>
              <h1 className={`${Styles.FooterTitle} text-lg font-semibold`}>
                Useful Links
              </h1>
              <ul className="mt-5">
                <Link
                  to="/"
                  className="text-md cursor-pointer hover:text-[#D53F34] block"
                >
                  About Us
                </Link>
                <Link
                  to="/"
                  className="text-md cursor-pointer hover:text-[#D53F34] my-1 block"
                >
                  Popular Causes
                </Link>
                <Link
                  to="/"
                  className="text-md cursor-pointer hover:text-[#D53F34] block"
                >
                  Upcoming Events
                </Link>
                <Link
                  to="/"
                  className="text-md cursor-pointer hover:text-[#D53F34] my-1 block"
                >
                  Latest Blog
                </Link>
              </ul>
            </div>
            <div>
              <h1 className={`${Styles.FooterTitle} text-lg font-semibold`}>
                Important Links
              </h1>
              <ul className="mt-5">
                <Link
                  to="/"
                  className="text-md cursor-pointer hover:text-[#D53F34] block"
                >
                  Term of Use
                </Link>
                <Link
                  to="/"
                  className="text-md cursor-pointer hover:text-[#D53F34] my-1 block"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/"
                  className="text-md cursor-pointer hover:text-[#D53F34] block"
                >
                  Report Violation
                </Link>
                <Link
                  to="/"
                  className="text-md cursor-pointer hover:text-[#D53F34] my-1 block"
                >
                  Discliamer
                </Link>
              </ul>
            </div>
            <div>
              <h1 className={`${Styles.FooterTitle} text-lg font-semibold`}>
                Subscribe
              </h1>
              <div className="mt-5">
                <p className="text-md font-medium text-[#D53F34]">
                  Be the First One to Recive Latest Updates
                </p>
                <div className="mt-3">
                  <form className="flex items-center">
                    <input
                      className="w-full h-[50px] outline-none border border-[#9c9c9c] pl-3 text-lg rounded-l-lg"
                      type="email"
                      name="email"
                      id="email"
                      required
                    />
                    <input
                      type="submit"
                      value="Send"
                      className={`w-[120px] h-[50px] ${
                        mode ? "bg-[#D53F34]" : "bg-[#191F2D]"
                      } text-md text-white p-2 cursor-pointer rounded-r-lg`}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <hr
            className={` ${
              mode
                ? "my-6 border-gray-600 border-dashed w-[80%] mx-auto"
                : "my-6 border-gray-300 w-[80%] mx-auto"
            }`}
          />
          <div className="flex items-center justify-center lg:justify-between flex-wrap">
            <div>
              <h1 className="text-md">
                Copyright &copy; 2024 WCD. All Rights Reserved
              </h1>
            </div>
            <div className="flex items-center">
              <h1 className="text-md mr-2">Ways to Donate By: </h1>
              <div className=" cursor-pointer">
                {" "}
                <img src={paypalImg} alt="Paypal Card Image" />
              </div>
              <div className="mx-2 cursor-pointer">
                <img src={masterImg} alt="Master Card Image" />
              </div>
              <div className=" cursor-pointer">
                {" "}
                <img src={visaImg} alt="Visa Card Image" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
