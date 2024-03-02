import { NavLink } from "react-router-dom";
import { Database, Home, LayoutDashboard, SquarePen } from "lucide-react";
import { useCureentThemeMode } from "../../redux/features/theme/themeSlice";
import { useAppSelector } from "../../redux/hooks";

export default function Sidebar() {
  const mode = useAppSelector(useCureentThemeMode);

  return (
    <div
      className={` ${
        mode ? "bg-[#191F2D]" : "bg-gradient-to-r from-[#EDECDA] to-[#cdebea]"
      } text-white col-span-2 h-screen top-0 left-0 sticky p-3 rounded-lg  sm:hidden md:hidden lg:block `}
    >
      <nav>
        <div
          className={`flex items-center p-2  shadow ${
            mode ? "text-[#fff]" : "text-[#191F2D]"
          }  rounded-lg`}
        >
          <LayoutDashboard size={18} />
          <NavLink className="text-md  ml-1" to="/dashboard">
            Dashboard
          </NavLink>
        </div>
        <div
          className={`flex items-center p-2  shadow ${
            mode ? "text-[#fff]" : "text-[#191F2D]"
          }  rounded-lg mt-3`}
        >
          <Database size={18} />
          <NavLink className="text-md ml-1" to="/dashboard/winter-clothes">
            Winter Clothes
          </NavLink>
        </div>
        <div
          className={`flex items-center p-2  shadow ${
            mode ? "text-[#fff]" : "text-[#191F2D]"
          }  rounded-lg mt-3`}
        >
          <SquarePen size={18} />
          <NavLink
            className="text-md ml-1"
            to="/dashboard/create-winter-clothes"
          >
            Create Clothes
          </NavLink>
        </div>

        <div
          className={`flex items-center p-2  shadow ${
            mode ? "text-[#fff]" : "text-[#191F2D]"
          }  rounded-lg mt-3`}
        >
          <Home size={18} />
          <NavLink className="text-md ml-1" to="/">
            Back To Home
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
